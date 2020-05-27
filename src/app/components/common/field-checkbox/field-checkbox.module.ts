import {NgModule} from '@angular/core';
import {FieldCheckboxComponent} from './field-checkbox.component';
import {CommonModule} from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    FieldCheckboxComponent,
  ],
  imports: [
    CommonModule,
    MatCheckboxModule,
  ],
  exports: [
    FieldCheckboxComponent,
  ]
})
export class FieldCheckboxModule {

}
