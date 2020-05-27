import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaveControllersComponent } from './save-controllers.component';
import {SaveButtonModule} from '../buttons/save-button/save-button.module';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [SaveControllersComponent],
  exports: [
    SaveControllersComponent
  ],
  imports: [
    CommonModule,
    SaveButtonModule,
    MatButtonModule
  ]
})
export class SaveControllersModule { }
