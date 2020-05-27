import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlueCardInputFieldsComponent } from './blue-card-input-fields.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {SsnFieldModule} from '../../common/fields/ssn-field/ssn-field.module';
import {InputFieldModule} from '../../common/fields/input-field/input-field.module';



@NgModule({
  declarations: [BlueCardInputFieldsComponent],
  exports: [
    BlueCardInputFieldsComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    SsnFieldModule,
    InputFieldModule
  ]
})
export class BlueCardInputFieldsModule { }
