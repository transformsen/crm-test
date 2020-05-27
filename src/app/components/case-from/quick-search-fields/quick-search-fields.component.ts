import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Store} from '@ngrx/store';
import {setCaseFromSearchFields, setCaseFromSelectedPlan} from '../../../stores/case-from-store/case-from-store.actions';
import * as _ from 'lodash';
import {isValidString} from '../../../utils/validation.util';
import {PlanToPlanJson} from '../../../models/data/plan-to-plan';
import {ValidateSearchFieldsBaseInterface} from '../../common/fields/common/validate-search-fields-base.interface';
import {PolicyIdFieldComponent} from '../../common/fields/policy-id-field/policy-id-field.component';
import {NpiFieldComponent} from '../../common/fields/npi-field/npi-field.component';
import {NpnFieldComponent} from '../../common/fields/npn-field/npn-field.component';

export interface QuickSearchFields {
  policyId: string;
  npi: string;
  npn: string;
  planToPlan: PlanToPlanJson;
}

@Component({
  selector: 'app-quick-search-fields',
  templateUrl: './quick-search-fields.component.html',
  styleUrls: ['./quick-search-fields.component.scss']
})
export class QuickSearchFieldsComponent implements OnInit, ValidateSearchFieldsBaseInterface {
  // fields for quick search
  @Input() fields: QuickSearchFields = {
    policyId: '',
    npi: '',
    npn: '',
    planToPlan: null,
  };
  // entered event triggered from input field
  @Output() entered: EventEmitter<void> = new EventEmitter<void>();
  // policy id
  @ViewChild(PolicyIdFieldComponent) policyId: PolicyIdFieldComponent;
  // npi field
  @ViewChild(NpiFieldComponent) npi: NpiFieldComponent;
  // npn field
  @ViewChild(NpnFieldComponent) npn: NpnFieldComponent;

  constructor(
    private store: Store,
  ) {
  }

  ngOnInit(): void {
    // set initial state of fields
    this.setFieldsToStore();
  }

  /**
   * set fields to store
   */
  private setFieldsToStore() {
    this.store.dispatch(setCaseFromSearchFields({fields: _.cloneDeep(this.fields) as any}));
  }

  /**
   * update fields and set to store
   * @param name field name
   * @param value changed value
   */
  onFieldChange(name: string, value: string | PlanToPlanJson) {
    this.fields[name] = value;
    this.setFieldsToStore();

    if (name === 'planToPlan') {
      this.store.dispatch(setCaseFromSelectedPlan({selectedPlan: value as PlanToPlanJson}));
    }
  }

  /**
   * field will be disabled when other fields inputted
   * @param field field
   */
  isFieldDisabled(field: string) {
    return Object.keys(this.fields)
      .filter(key => key !== field)
      .some(key => isValidString(this.fields[key]));
  }

  /**
   * check all validation
   */
  checkAllValidation(): boolean {
    let result = true;

    this.fieldList.forEach(field => {
      if (!field.checkValidation()) {
        result = false;
      }
    });

    return result;
  }

  /**
   * return fields as array
   */
  get fieldList() {
    return [
      this.policyId,
      this.npi,
      this.npn,
    ];
  }
}
