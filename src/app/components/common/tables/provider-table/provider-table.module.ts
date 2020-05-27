import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProviderTableComponent } from './provider-table.component';
import {TableModule} from '../table/table.module';
import {TableRowDataPipeModule} from '../../../../pipes/table-row-data-pipe/table-row-data-pipe.module';



@NgModule({
  declarations: [ProviderTableComponent],
  exports: [
    ProviderTableComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    TableRowDataPipeModule
  ]
})
export class ProviderTableModule { }
