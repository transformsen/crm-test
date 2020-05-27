import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFieldComponent } from './input-field.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {FieldErrorModule} from '../../field-error/field-error.module';



@NgModule({
  declarations: [InputFieldComponent],
  exports: [
    InputFieldComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    FieldErrorModule
  ]
})
export class InputFieldModule { }
