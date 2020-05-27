import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaseAboutButtonComponent } from './case-about-button.component';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [CaseAboutButtonComponent],
  exports: [
    CaseAboutButtonComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ]
})
export class CaseAboutButtonModule { }
