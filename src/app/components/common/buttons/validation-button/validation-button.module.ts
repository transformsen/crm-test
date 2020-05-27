import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationButtonComponent } from './validation-button.component';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [ValidationButtonComponent],
  exports: [
    ValidationButtonComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ]
})
export class ValidationButtonModule { }
