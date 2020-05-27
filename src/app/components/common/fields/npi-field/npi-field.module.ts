import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpiFieldComponent } from './npi-field.component';
import {InputFieldModule} from '../input-field/input-field.module';



@NgModule({
  declarations: [NpiFieldComponent],
  exports: [
    NpiFieldComponent
  ],
  imports: [
    CommonModule,
    InputFieldModule
  ]
})
export class NpiFieldModule { }
