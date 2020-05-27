import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {SearchFieldsBaseComponent} from '../common/search-fields-base.component';
import {ValidateSearchFieldsBaseInterface} from '../../common/fields/common/validate-search-fields-base.interface';
import {PlanToPlanJson} from '../../../models/data/plan-to-plan';
import {Store} from '@ngrx/store';
import {setCaseFromSearchFields, setCaseFromSelectedPlan} from '../../../stores/case-from-store/case-from-store.actions';
import * as _ from 'lodash';
import {PlanToPlanFieldComponent} from '../../common/fields/plan-to-plan-field/plan-to-plan-field.component';

export interface PlanToPlanSearchFields {
  planToPlan: PlanToPlanJson;
}

@Component({
  selector: 'app-plan-to-plan-search-fields',
  templateUrl: './plan-to-plan-search-fields.component.html',
  styleUrls: ['./plan-to-plan-search-fields.component.scss']
})
export class PlanToPlanSearchFieldsComponent
  extends SearchFieldsBaseComponent<PlanToPlanSearchFields>
  implements OnInit, ValidateSearchFieldsBaseInterface {

  // fields
  @Input() fields: PlanToPlanSearchFields = {
    planToPlan: null,
  };
  // plan to plan field
  @ViewChild(PlanToPlanFieldComponent) planToPlan: PlanToPlanFieldComponent;

  constructor(
    private store: Store,
  ) {
    super();
  }

  ngOnInit(): void {
    this.setSearchFields();
  }

  /**
   * handle plan to plan value change
   * @param value changed value
   */
  onValueChange(value: PlanToPlanJson) {
    // remove error
    this.planToPlan.error = null;
    this.fields.planToPlan = value;
    this.setSearchFields();
    this.store.dispatch(setCaseFromSelectedPlan({selectedPlan: value}));
  }

  /**
   * set search fields to store
   */
  private setSearchFields() {
    this.store.dispatch(setCaseFromSearchFields({fields: _.cloneDeep(this.fields) as any}));
  }

  checkAllValidation(): boolean {
    const result = !!this.fields.planToPlan;

    if (!result && this.planToPlan) {
      this.planToPlan.error = 'Please select plan';
    }

    return result;
  }
}
