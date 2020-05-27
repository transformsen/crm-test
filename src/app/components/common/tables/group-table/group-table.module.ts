import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupTableComponent } from './group-table.component';
import {TableModule} from '../table/table.module';
import {TableRowDataPipeModule} from '../../../../pipes/table-row-data-pipe/table-row-data-pipe.module';



@NgModule({
  declarations: [GroupTableComponent],
  exports: [
    GroupTableComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    TableRowDataPipeModule
  ]
})
export class GroupTableModule { }
