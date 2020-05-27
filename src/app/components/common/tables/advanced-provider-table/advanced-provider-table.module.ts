import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvancedProviderTableComponent } from './advanced-provider-table.component';
import {TableModule} from '../table/table.module';
import {TableRowDataPipeModule} from '../../../../pipes/table-row-data-pipe/table-row-data-pipe.module';



@NgModule({
  declarations: [AdvancedProviderTableComponent],
  exports: [
    AdvancedProviderTableComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    TableRowDataPipeModule
  ]
})
export class AdvancedProviderTableModule { }
