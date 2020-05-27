import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchTypeButtonsComponent } from './search-type-buttons.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';



@NgModule({
  declarations: [SearchTypeButtonsComponent],
  exports: [
    SearchTypeButtonsComponent
  ],
  imports: [
    CommonModule,
    MatButtonToggleModule
  ]
})
export class SearchTypeButtonsModule { }
