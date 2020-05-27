import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentTitleComponent } from './content-title.component';



@NgModule({
  declarations: [ContentTitleComponent],
  exports: [
    ContentTitleComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContentTitleModule { }
