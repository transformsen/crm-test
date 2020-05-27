import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCaseButtonComponent } from './create-case-button.component';
import {MatButtonModule} from '@angular/material/button';
import {IconAddModule} from '../../icons/icon-add/icon-add.module';



@NgModule({
  declarations: [CreateCaseButtonComponent],
  exports: [
    CreateCaseButtonComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    IconAddModule
  ]
})
export class CreateCaseButtonModule { }
