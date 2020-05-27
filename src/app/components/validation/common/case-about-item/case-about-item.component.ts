import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppCaseAboutItemType} from '../../../../stores/case-about-store/case-about-store.reducer';
import {SubscriptionInventory} from '../../../../utils/subscribe.util';
import {combineLatest} from 'rxjs';
import {getCaseAboutItemType} from '../../../../stores/case-about-store/case-about-store.selectors';

@Component({
  selector: 'app-case-about-item',
  templateUrl: './case-about-item.component.html',
  styleUrls: ['./case-about-item.component.scss']
})
export class CaseAboutItemComponent implements OnInit, OnDestroy {
  // type
  type: AppCaseAboutItemType;

  private inventory: SubscriptionInventory = new SubscriptionInventory();
  private subKeys = {
    caseAboutDetail: 'caseAboutDetail',
  };

  constructor(
    private store: Store,
  ) {
  }

  ngOnInit(): void {
    this.getCaseAboutDetails();
  }

  ngOnDestroy(): void {
    this.inventory.unSubscribeAll();
  }

  private getCaseAboutDetails() {
    this.inventory.unSubscribe(this.subKeys.caseAboutDetail);

    const sub = combineLatest([
      this.store.select(getCaseAboutItemType),
    ]);
  }
}
