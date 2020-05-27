import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaxIdFieldComponent } from './tax-id-field.component';
import {InputFieldModule} from '../input-field/input-field.module';



@NgModule({
  declarations: [TaxIdFieldComponent],
  exports: [
    TaxIdFieldComponent
  ],
  imports: [
    CommonModule,
    InputFieldModule
  ]
})
export class TaxIdFieldModule { }
