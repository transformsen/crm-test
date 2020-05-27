import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityFieldComponent } from './city-field.component';
import {InputFieldModule} from '../input-field/input-field.module';



@NgModule({
  declarations: [CityFieldComponent],
  exports: [
    CityFieldComponent
  ],
  imports: [
    CommonModule,
    InputFieldModule
  ]
})
export class CityFieldModule { }
