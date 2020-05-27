import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtherTableComponent } from './other-table.component';
import {MainStoreModule} from '../../../../stores/main-store/main-store.module';



@NgModule({
  declarations: [OtherTableComponent],
  exports: [
    OtherTableComponent
  ],
  imports: [
    CommonModule,
    MainStoreModule,
  ]
})
export class OtherTableModule { }
