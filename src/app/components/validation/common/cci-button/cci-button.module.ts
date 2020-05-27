import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CciButtonComponent } from './cci-button.component';
import {MatButtonModule} from '@angular/material/button';
import {CciModalModule} from '../cci-modal/cci-modal.module';



@NgModule({
  declarations: [CciButtonComponent],
  exports: [
    CciButtonComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    CciModalModule
  ]
})
export class CciButtonModule { }
