import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProviderLocationTableComponent } from './provider-location-table.component';
import {TableModule} from '../table/table.module';
import {TableRowDataPipeModule} from '../../../../pipes/table-row-data-pipe/table-row-data-pipe.module';



@NgModule({
  declarations: [ProviderLocationTableComponent],
  exports: [
    ProviderLocationTableComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    TableRowDataPipeModule
  ]
})
export class ProviderLocationTableModule { }
