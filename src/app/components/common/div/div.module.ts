import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DivComponent } from './div.component';
import {MatDividerModule} from '@angular/material/divider';



@NgModule({
  declarations: [DivComponent],
  exports: [
    DivComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule
  ]
})
export class DivModule { }
