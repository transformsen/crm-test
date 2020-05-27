import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule} from '@angular/material/snack-bar';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSnackBarModule,
  ],
  exports: [
    MatSnackBarModule,
  ],
  providers: [
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2000}},
  ],
})
export class SnackbarModule { }
