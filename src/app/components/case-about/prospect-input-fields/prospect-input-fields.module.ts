import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProspectInputFieldsComponent } from './prospect-input-fields.component';
import {SsnFieldModule} from '../../common/fields/ssn-field/ssn-field.module';
import {InputFieldModule} from '../../common/fields/input-field/input-field.module';
import {FlexModule} from '@angular/flex-layout';



@NgModule({
  declarations: [ProspectInputFieldsComponent],
  exports: [
    ProspectInputFieldsComponent
  ],
  imports: [
    CommonModule,
    SsnFieldModule,
    InputFieldModule,
    FlexModule
  ]
})
export class ProspectInputFieldsModule { }
