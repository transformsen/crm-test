import { Component } from '@angular/core';
import {BasicCaseFromBaseComponent} from '../common/basic-case-from-base.component';
import {PlanToPlanJson} from '../../../../../models/data/plan-to-plan';

@Component({
  selector: 'app-basic-plan-case-from',
  templateUrl: './basic-plan-case-from.component.html',
  styleUrls: [
    '../common/basic-case-from-base.component.scss',
    './basic-plan-case-from.component.scss'
  ]
})
export class BasicPlanCaseFromComponent extends BasicCaseFromBaseComponent<PlanToPlanJson> {
  // checked state
  checked = {
    planNumber: true,
    planName: true,
  };
}
