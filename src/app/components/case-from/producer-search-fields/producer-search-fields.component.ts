import {Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {ValidateSearchFieldsBaseInterface} from '../../common/fields/common/validate-search-fields-base.interface';
import {OptionItem} from '../../../models/component/option-item';
import {
  setCaseFromProducerType,
  setCaseFromSearchFields,
  setCaseFromSelectedProducer
} from '../../../stores/case-from-store/case-from-store.actions';
import {Store} from '@ngrx/store';
import {SubscriptionInventory} from '../../../utils/subscribe.util';
import {getCaseFromProducerType} from '../../../stores/case-from-store/case-from-store.selectors';
import {AppCaseFromProducerType} from '../../../stores/case-from-store/case-from-store.reducer';
import * as _ from 'lodash';
import {DefaultProducerSearchFieldsComponent} from './default-producer-search-fields/default-producer-search-fields.component';
import {ProducerOrganizationSearchFieldsComponent} from './producer-organization-search-fields/producer-organization-search-fields.component';

@Component({
  selector: 'app-producer-search-fields',
  templateUrl: './producer-search-fields.component.html',
  styleUrls: ['./producer-search-fields.component.scss']
})
export class ProducerSearchFieldsComponent implements OnInit, OnDestroy, ValidateSearchFieldsBaseInterface {
  // fields for quick search
  @Input() fields: any = {};
  // entered event
  @Output() entered: EventEmitter<void> = new EventEmitter<void>();
  // default producer search fields
  @ViewChild(DefaultProducerSearchFieldsComponent) defaultProducerSearchFields: DefaultProducerSearchFieldsComponent;
  // producer organization search fields
  @ViewChild(ProducerOrganizationSearchFieldsComponent)
  producerOrganizationSearchFieldsComponent: ProducerOrganizationSearchFieldsComponent;

  // producer search type
  type: AppCaseFromProducerType;
  // options for producer type
  options: OptionItem<AppCaseFromProducerType>[] = [
    new OptionItem<AppCaseFromProducerType>('Producer', 'producer'),
    new OptionItem<AppCaseFromProducerType>('Producer Organization', 'producerOrganization'),
  ];

  // subscription inventory
  private inventory: SubscriptionInventory = new SubscriptionInventory();
  // subscription keys for inventory
  private subKeys = {
    producerType: 'producerType',
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
    this.inventory.unSubscribe(this.subKeys.producerType);

    const sub = this.store
      .select(getCaseFromProducerType)
      .subscribe({
        next: res => {
          this.type = res;
        },
      });

    this.inventory.store(this.subKeys.producerType, sub);
  }

  /**
   * handle producer type changed
   * @param value changed value
   */
  onProducerTypeChange(value: AppCaseFromProducerType) {
    // clear selected producer and fields
    this.store.dispatch(setCaseFromSelectedProducer({selectedProducer: null}));
    this.store.dispatch(setCaseFromSearchFields({fields: {}}));
    this.store.dispatch(setCaseFromProducerType({producerType: value}));
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
    return this.defaultProducerSearchFields
      || this.producerOrganizationSearchFieldsComponent;
  }
}
