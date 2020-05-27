import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectFieldComponent } from './select-field.component';
import {MatSelectModule} from '@angular/material/select';
import {FieldErrorModule} from '../../field-error/field-error.module';



@NgModule({
  declarations: [SelectFieldComponent],
  exports: [
    SelectFieldComponent
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    FieldErrorModule,
  ]
})
export class SelectFieldModule { }
