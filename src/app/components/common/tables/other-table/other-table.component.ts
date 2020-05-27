import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {SubscriptionInventory} from '../../../../utils/subscribe.util';
import {combineLatest} from 'rxjs';
import {getCallbackNumber, getCallerName} from '../../../../stores/main-store/main-store.selectors';

@Component({
  selector: 'app-other-table',
  templateUrl: './other-table.component.html',
  styleUrls: ['./other-table.component.scss']
})
export class OtherTableComponent implements OnInit, OnDestroy {
  // caller name
  callerName: string;
  // callback number
  callbackNumber: string;

  // subscription inventory
  private inventory: SubscriptionInventory = new SubscriptionInventory();
  // subscription keys for store
  private subKeys = {
    callerAndCallbackNumber: 'callerAndCallbackNumber',
  };

  constructor(
    private store: Store,
  ) { }

  ngOnInit(): void {
    this.getCallerNameAndNumber();
  }

  ngOnDestroy(): void {
    this.inventory.unSubscribeAll();
  }

  /**
   * get caller name and callback number from store
   */
  private getCallerNameAndNumber() {
    this.inventory.unSubscribe(this.subKeys.callerAndCallbackNumber);

    const sub = combineLatest([
      this.store.select(getCallerName),
      this.store.select(getCallbackNumber),
    ]).subscribe({
      next: res => {
        this.callerName = res[0];
        this.callbackNumber = res[1];
      },
    });

    this.inventory.store(this.subKeys.callerAndCallbackNumber, sub);
  }
}
