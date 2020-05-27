import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanToPlanSearchFieldsComponent } from './plan-to-plan-search-fields.component';
import {PlanToPlanFieldModule} from '../../common/fields/plan-to-plan-field/plan-to-plan-field.module';



@NgModule({
  declarations: [PlanToPlanSearchFieldsComponent],
  exports: [
    PlanToPlanSearchFieldsComponent
  ],
  imports: [
    CommonModule,
    PlanToPlanFieldModule
  ]
})
export class PlanToPlanSearchFieldsModule { }
