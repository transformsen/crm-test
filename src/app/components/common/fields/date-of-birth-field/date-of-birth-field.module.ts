import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateOfBirthFieldComponent } from './date-of-birth-field.component';
import {InputFieldModule} from '../input-field/input-field.module';



@NgModule({
  declarations: [DateOfBirthFieldComponent],
  exports: [
    DateOfBirthFieldComponent
  ],
  imports: [
    CommonModule,
    InputFieldModule
  ]
})
export class DateOfBirthFieldModule { }
