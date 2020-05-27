import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SsnFieldComponent } from './ssn-field.component';
import {InputFieldModule} from '../input-field/input-field.module';



@NgModule({
  declarations: [SsnFieldComponent],
  exports: [
    SsnFieldComponent
  ],
  imports: [
    CommonModule,
    InputFieldModule
  ]
})
export class SsnFieldModule { }
