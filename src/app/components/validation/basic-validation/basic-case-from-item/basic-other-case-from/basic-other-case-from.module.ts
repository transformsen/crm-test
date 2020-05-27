import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicOtherCaseFromComponent } from './basic-other-case-from.component';



@NgModule({
  declarations: [BasicOtherCaseFromComponent],
  exports: [
    BasicOtherCaseFromComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BasicOtherCaseFromModule { }
