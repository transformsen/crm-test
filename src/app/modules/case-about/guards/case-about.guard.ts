import {Injectable, OnDestroy} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {combineLatest} from 'rxjs';
import {Store} from '@ngrx/store';
import {SubscriptionInventory} from '../../../utils/subscribe.util';
import {
  getCaseFromSelectedGroup, getCaseFromSelectedOther, getCaseFromSelectedPlan,
  getCaseFromSelectedProducer,
  getCaseFromSelectedProvider
} from '../../../stores/case-from-store/case-from-store.selectors';

@Injectable({
  providedIn: 'root'
})
export class CaseAboutGuard implements CanActivate, OnDestroy {
  // subscription inventory
  private inventory: SubscriptionInventory = new SubscriptionInventory();
  // subscription keys for inventory
  private subKeys = {
    getSelections: 'getSelections',
  };

  constructor(
    private store: Store,
    private router: Router,
  ) {
  }

  ngOnDestroy(): void {
    this.inventory.unSubscribeAll();
  }

  /**
   * can activate only needed selection is exists
   */
  canActivate(): Promise<boolean> {
    return new Promise(resolve => {
      this.inventory.unSubscribe(this.subKeys.getSelections);

      const sub = combineLatest([
        this.store.select(getCaseFromSelectedProvider),
        this.store.select(getCaseFromSelectedProducer),
        this.store.select(getCaseFromSelectedGroup),
        this.store.select(getCaseFromSelectedPlan),
        this.store.select(getCaseFromSelectedOther),
      ]).subscribe({
        next: res => {
          if (res.some(item => item)) {
            resolve(true);
          } else {
            resolve(false);
            this.router.navigate(['/case-from']);
          }
        }
      });

      this.inventory.store(this.subKeys.getSelections, sub);
    });
  }

}
