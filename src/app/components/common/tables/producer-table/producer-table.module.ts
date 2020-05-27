import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProducerTableComponent } from './producer-table.component';
import {TableModule} from '../table/table.module';
import {TableRowDataPipeModule} from '../../../../pipes/table-row-data-pipe/table-row-data-pipe.module';



@NgModule({
  declarations: [ProducerTableComponent],
  exports: [
    ProducerTableComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    TableRowDataPipeModule
  ]
})
export class ProducerTableModule { }
