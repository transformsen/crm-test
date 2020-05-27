import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NameFieldComponent } from './name-field.component';
import {InputFieldModule} from '../input-field/input-field.module';



@NgModule({
  declarations: [NameFieldComponent],
  exports: [
    NameFieldComponent
  ],
  imports: [
    CommonModule,
    InputFieldModule
  ]
})
export class NameFieldModule { }
