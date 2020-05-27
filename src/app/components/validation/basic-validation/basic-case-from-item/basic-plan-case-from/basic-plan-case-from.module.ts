import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicPlanCaseFromComponent } from './basic-plan-case-from.component';
import {FieldCheckboxModule} from '../../../../common/field-checkbox/field-checkbox.module';
import {IconArrowUpModule} from '../../../../common/icons/icon-arrow-up/icon-arrow-up.module';
import {IconArrowDownModule} from '../../../../common/icons/icon-arrow-down/icon-arrow-down.module';



@NgModule({
  declarations: [BasicPlanCaseFromComponent],
  exports: [
    BasicPlanCaseFromComponent
  ],
  imports: [
    CommonModule,
    FieldCheckboxModule,
    IconArrowUpModule,
    IconArrowDownModule,
  ]
})
export class BasicPlanCaseFromModule { }
