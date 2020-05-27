import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContinueButtonComponent } from './continue-button.component';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [ContinueButtonComponent],
  exports: [
    ContinueButtonComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ]
})
export class ContinueButtonModule { }
