import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CciModalComponent } from './cci-modal.component';
import {CciModalItemModule} from './cci-modal-item/cci-modal-item.module';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [CciModalComponent],
  exports: [
    CciModalComponent
  ],
  imports: [
    CommonModule,
    CciModalItemModule,
    MatButtonModule
  ]
})
export class CciModalModule { }
