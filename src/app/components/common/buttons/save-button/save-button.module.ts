import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaveButtonComponent } from './save-button.component';
import {MatButtonModule} from '@angular/material/button';
import {IconAddModule} from '../../icons/icon-add/icon-add.module';



@NgModule({
  declarations: [SaveButtonComponent],
  exports: [
    SaveButtonComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    IconAddModule
  ]
})
export class SaveButtonModule { }
