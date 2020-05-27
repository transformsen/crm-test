import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconAddComponent } from './icon-add.component';



@NgModule({
  declarations: [IconAddComponent],
  exports: [
    IconAddComponent
  ],
  imports: [
    CommonModule
  ]
})
export class IconAddModule { }
