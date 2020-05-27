import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldErrorComponent } from './field-error.component';



@NgModule({
  declarations: [FieldErrorComponent],
  exports: [
    FieldErrorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FieldErrorModule { }
