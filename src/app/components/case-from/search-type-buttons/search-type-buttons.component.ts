import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {OptionItem} from '../../../models/component/option-item';
import {AppCaseFromSearchType} from '../../../stores/case-from-store/case-from-store.reducer';
import {Store} from '@ngrx/store';
import {getCaseFromSearchType} from '../../../stores/case-from-store/case-from-store.selectors';
import {setCaseFromSearchType} from '../../../stores/case-from-store/case-from-store.actions';
import {SubscriptionInventory} from '../../../utils/subscribe.util';

@Component({
  selector: 'app-search-type-buttons',
  templateUrl: './search-type-buttons.component.html',
  styleUrls: ['./search-type-buttons.component.scss']
})
export class SearchTypeButtonsComponent implements OnInit, OnDestroy {
  // search type changed event
  @Output() searchTypeChanged: EventEmitter<void> = new EventEmitter<void>();

  // value for button
  // default is 'quickSearch'
  searchType: AppCaseFromSearchType = 'quickSearch';
  // available types
  types: OptionItem<AppCaseFromSearchType>[] = [
    new OptionItem('Quick Search', 'quickSearch'),
    new OptionItem('Member', 'member'),
    new OptionItem('Provider', 'provider'),
    new OptionItem('Producer', 'producer'),
    new OptionItem('Group', 'group'),
    new OptionItem('Plan to Plan', 'planToPlan'),
    new OptionItem('Other', 'other'),
  ];

  // subscription inventory
  private inventory: SubscriptionInventory = new SubscriptionInventory();
  // subscription keys for inventory
  private subKeys = {
    searchType: 'searchType',
  };

  constructor(
    private store: Store,
  ) {
  }

  ngOnInit(): void {
    this.getSearchType();
  }

  ngOnDestroy(): void {
    this.inventory.unSubscribeAll();
  }

  /**
   * get search type from store
   */
  private getSearchType() {
    // unsubscribe stored subscription
    this.inventory.unSubscribe(this.subKeys.searchType);

    const sub = this.store
      .select(getCaseFromSearchType)
      .subscribe({
        next: res => {
          if (res) {
            this.searchType = res;
          }
        },
      });

    // store subscription
    this.inventory.store(this.subKeys.searchType, sub);
  }

  /**
   * handle click button
   * @param item option item
   */
  onClickButton(item: OptionItem<AppCaseFromSearchType>) {
    if (item.value !== this.searchType) {
      this.searchTypeChanged.emit();
    }

    this.store.dispatch(setCaseFromSearchType({searchType: item.value}));
  }
}
