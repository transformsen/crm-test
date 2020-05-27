import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicHipaaPathwaysComponent } from './basic-hipaa-pathways.component';



@NgModule({
  declarations: [BasicHipaaPathwaysComponent],
  exports: [
    BasicHipaaPathwaysComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BasicHipaaPathwaysModule { }
