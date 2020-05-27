import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpnFieldComponent } from './npn-field.component';
import {InputFieldModule} from '../input-field/input-field.module';



@NgModule({
  declarations: [NpnFieldComponent],
  exports: [
    NpnFieldComponent
  ],
  imports: [
    CommonModule,
    InputFieldModule
  ]
})
export class NpnFieldModule { }
