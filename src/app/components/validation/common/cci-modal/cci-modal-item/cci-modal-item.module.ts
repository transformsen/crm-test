import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CciModalItemComponent } from './cci-modal-item.component';



@NgModule({
  declarations: [CciModalItemComponent],
  exports: [
    CciModalItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CciModalItemModule { }
