import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchButtonComponent } from './search-button.component';
import {MatButtonModule} from '@angular/material/button';
import {IconSearchModule} from '../../icons/icon-search/icon-search.module';



@NgModule({
  declarations: [SearchButtonComponent],
  exports: [
    SearchButtonComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    IconSearchModule
  ]
})
export class SearchButtonModule { }
