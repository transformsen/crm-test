import {PagingJson} from '../../models/data/paging';
import {environment} from '../../../environments/environment';
import {Store} from '@ngrx/store';
import {combineLatest} from 'rxjs';
import {getCallbackNumber, getCallerName} from '../../stores/main-store/main-store.selectors';
import {SubscriptionInventory} from '../../utils/subscribe.util';
import {OnDestroy, OnInit} from '@angular/core';
import {isValidString} from '../../utils/validation.util';
import * as _ from 'lodash';

const {
  defaultPageSize,
} = environment;

export class SearchBaseComponent implements OnInit, OnDestroy {
  // table search result data
  data: any[] = [];
  // page number for table
  page = 0;
  // page size for table
  size = defaultPageSize;
  // total number for table
  total = 0;
  // search fields
  fields: any = {};
  // caller name
  protected callerName: string;
  // callback number
  protected callbackNumber: string;
  // preserved search fields
  protected preservedSearchFields: { [key: string]: string } = {};
  // subscription inventory for private
  private privateInventory: SubscriptionInventory = new SubscriptionInventory();
  // subscription key for private inventory
  private privateSubKey = {
    callerAndCallbackNumber: 'callerAndCallbackNumber',
  };

  constructor(
    protected store: Store,
  ) {
  }

  ngOnInit(): void {
    this.getCallerNameAndCallbackNumber();
  }

  ngOnDestroy(): void {
    this.privateInventory.unSubscribeAll();
  }

  /**
   * get caller name and callback number from store
   */
  private getCallerNameAndCallbackNumber() {
    // unsubscribe stored subscription
    this.privateInventory.unSubscribe(this.privateSubKey.callerAndCallbackNumber);

    const sub = combineLatest([
      this.store.select(getCallerName),
      this.store.select(getCallbackNumber),
    ]).subscribe({
      next: res => {
        this.callerName = res[0];
        this.callbackNumber = res[1];
      },
    });

    // store subscription
    this.privateInventory.store(this.privateSubKey.callerAndCallbackNumber, sub);
  }

  /**
   * set responded data to fields
   * @param res paging response
   */
  protected setRespondedData(res: PagingJson<any>) {
    this.data = res.data;
    this.page = res.page;
    this.size = res.size;
    this.total = res.total;
  }

  /**
   * preserve search fields for paging
   */
  protected preserveSearchFields() {
    this.preservedSearchFields = {
      ..._.cloneDeep(this.fields),
      callerName: this.callerName,
      callbackNumber: this.callbackNumber,
    };
  }

  /**
   * return `true` when all fields are not inputted
   */
  get searchDisabled() {
    return Object.keys(this.fields)
      // remove plan to plan data on check validation
      .filter(key => key !== 'planToPlan')
      .every(key => !isValidString(this.fields[key])) || !this.callerName || !this.callbackNumber;
  }

  /**
   * return true when data is exists
   */
  get hasData() {
    return this.data && this.data.length > 0;
  }
}
