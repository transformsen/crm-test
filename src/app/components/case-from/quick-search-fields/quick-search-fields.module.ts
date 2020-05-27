import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuickSearchFieldsComponent } from './quick-search-fields.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {PolicyIdFieldModule} from '../../common/fields/policy-id-field/policy-id-field.module';
import {NpiFieldModule} from '../../common/fields/npi-field/npi-field.module';
import {NpnFieldModule} from '../../common/fields/npn-field/npn-field.module';
import {PlanToPlanFieldModule} from '../../common/fields/plan-to-plan-field/plan-to-plan-field.module';



@NgModule({
  declarations: [QuickSearchFieldsComponent],
  exports: [
    QuickSearchFieldsComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    PolicyIdFieldModule,
    NpiFieldModule,
    NpnFieldModule,
    PlanToPlanFieldModule
  ]
})
export class QuickSearchFieldsModule { }
