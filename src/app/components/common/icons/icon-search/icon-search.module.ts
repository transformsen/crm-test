import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconSearchComponent } from './icon-search.component';



@NgModule({
  declarations: [IconSearchComponent],
  exports: [
    IconSearchComponent
  ],
  imports: [
    CommonModule
  ]
})
export class IconSearchModule { }
