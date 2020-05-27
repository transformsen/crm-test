import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberTableComponent } from './member-table.component';
import {TableModule} from '../table/table.module';
import {TableRowDataPipeModule} from '../../../../pipes/table-row-data-pipe/table-row-data-pipe.module';



@NgModule({
  declarations: [MemberTableComponent],
  exports: [
    MemberTableComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    TableRowDataPipeModule
  ]
})
export class MemberTableModule { }
