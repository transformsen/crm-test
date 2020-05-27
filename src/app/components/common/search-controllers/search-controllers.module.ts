import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchControllersComponent } from './search-controllers.component';
import {SearchButtonModule} from '../buttons/search-button/search-button.module';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [SearchControllersComponent],
  exports: [
    SearchControllersComponent
  ],
  imports: [
    CommonModule,
    SearchButtonModule,
    MatButtonModule
  ]
})
export class SearchControllersModule { }
