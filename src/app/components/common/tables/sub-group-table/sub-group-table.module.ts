import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubGroupTableComponent } from './sub-group-table.component';
import {TableModule} from '../table/table.module';
import {TableRowDataPipeModule} from '../../../../pipes/table-row-data-pipe/table-row-data-pipe.module';



@NgModule({
  declarations: [SubGroupTableComponent],
  exports: [
    SubGroupTableComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    TableRowDataPipeModule
  ]
})
export class SubGroupTableModule { }
