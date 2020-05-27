import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateFieldComponent } from './state-field.component';
import {SelectFieldModule} from '../select-field/select-field.module';



@NgModule({
  declarations: [StateFieldComponent],
  exports: [
    StateFieldComponent
  ],
  imports: [
    CommonModule,
    SelectFieldModule
  ]
})
export class StateFieldModule { }
