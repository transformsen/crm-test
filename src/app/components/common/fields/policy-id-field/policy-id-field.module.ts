import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolicyIdFieldComponent } from './policy-id-field.component';
import {InputFieldModule} from '../input-field/input-field.module';



@NgModule({
  declarations: [PolicyIdFieldComponent],
  exports: [
    PolicyIdFieldComponent
  ],
  imports: [
    CommonModule,
    InputFieldModule
  ]
})
export class PolicyIdFieldModule { }
