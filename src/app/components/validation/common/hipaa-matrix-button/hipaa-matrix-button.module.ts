import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HipaaMatrixButtonComponent } from './hipaa-matrix-button.component';



@NgModule({
  declarations: [HipaaMatrixButtonComponent],
  exports: [
    HipaaMatrixButtonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HipaaMatrixButtonModule { }
