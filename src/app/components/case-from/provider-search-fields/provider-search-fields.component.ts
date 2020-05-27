import {Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {OptionItem} from '../../../models/component/option-item';
import {Store} from '@ngrx/store';
import {
  setCaseFromProviderType,
  setCaseFromSearchFields,
  setCaseFromSelectedProvider
} from '../../../stores/case-from-store/case-from-store.actions';
import * as _ from 'lodash';
import {ValidateSearchFieldsBaseInterface} from '../../common/fields/common/validate-search-fields-base.interface';
import {ContractedProviderSearchFieldsComponent} from './contracted-provider-search-fields/contracted-provider-search-fields.component';
import {AppCaseFromProviderType} from '../../../stores/case-from-store/case-from-store.reducer';
import {getCaseFromProviderType} from '../../../stores/case-from-store/case-from-store.selectors';
import {SubscriptionInventory} from '../../../utils/subscribe.util';
import {NonContractedProviderCaptureFieldsComponent} from './non-contracted-provider-capture-fields/non-contracted-provider-capture-fields.component';
import {ProviderPracticeLocationSearchFieldsComponent} from './provider-practice-location-search-fields/provider-practice-location-search-fields.component';

@Component({
  selector: 'app-provider-search-fields',
  templateUrl: './provider-search-fields.component.html',
  styleUrls: ['./provider-search-fields.component.scss']
})
export class ProviderSearchFieldsComponent implements OnInit, OnDestroy, ValidateSearchFieldsBaseInterface {
  // fields for quick search
  @Input() fields: any = {};
  // entered event
  @Output() entered: EventEmitter<void> = new EventEmitter<void>();
  // contracted provider search fields
  @ViewChild(ContractedProviderSearchFieldsComponent) contractedProviderSearchFields: ContractedProviderSearchFieldsComponent;
  // non contracted provider search fields
  @ViewChild(NonContractedProviderCaptureFieldsComponent) nonContractedProviderSearchFields: NonContractedProviderCaptureFieldsComponent;
  // provider practice location search fields
  @ViewChild(ProviderPracticeLocationSearchFieldsComponent)
  providerPracticeLocationSearchFields: ProviderPracticeLocationSearchFieldsComponent;

  // provider type
  type: AppCaseFromProviderType = 'contractedProvider';
  // options for provider type
  options: OptionItem<AppCaseFromProviderType>[] = [
    new OptionItem<AppCaseFromProviderType>('Contracted Provider', 'contractedProvider'),
    new OptionItem<AppCaseFromProviderType>('Non-Contracted Provider', 'nonContractedProvider'),
    new OptionItem<AppCaseFromProviderType>('Provider Practice Location', 'providerPracticeLocation'),
  ];

  // subscription inventory
  private inventory: SubscriptionInventory = new SubscriptionInventory();
  // subscription keys for inventory
  private subKeys = {
    providerType: 'providerType',
  };

  constructor(
    private store: Store,
  ) {
  }

  ngOnInit(): void {
    this.getProviderType();
  }

  ngOnDestroy(): void {
    this.inventory.unSubscribeAll();
  }

  /**
   * get provider type
   */
  private getProviderType() {
    this.inventory.unSubscribe(this.subKeys.providerType);

    const sub = this.store
      .select(getCaseFromProviderType)
      .subscribe({
        next: res => {
          this.type = res;
        },
      });

    this.inventory.store(this.subKeys.providerType, sub);
  }

  /**
   * handle provider type changed
   * @param value changed value
   */
  onProviderTypeChange(value: AppCaseFromProviderType) {
    // clear selected provider and fields
    this.store.dispatch(setCaseFromSelectedProvider({selectedProvider: null}));
    this.store.dispatch(setCaseFromSearchFields({fields: {}}));
    this.store.dispatch(setCaseFromProviderType({providerType: value}));
  }

  /**
   * set changed fields to store
   * @param fields changed fields
   */
  onFieldsChanged(fields: any) {
    this.store.dispatch(setCaseFromSearchFields({fields: _.cloneDeep(fields)}));
  }

  checkAllValidation(): boolean {
    const searchFields = this.searchFields;

    if (searchFields) {
      return searchFields.checkAllValidation();
    }
  }

  get searchFields() {
    return this.contractedProviderSearchFields
      || this.nonContractedProviderSearchFields
      || this.providerPracticeLocationSearchFields;
  }
}
