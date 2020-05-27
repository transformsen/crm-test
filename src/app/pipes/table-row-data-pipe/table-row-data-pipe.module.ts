import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableRowDataPipe } from './table-row-data.pipe';



@NgModule({
  declarations: [TableRowDataPipe],
  imports: [
    CommonModule
  ],
  exports: [
    TableRowDataPipe,
  ],
})
export class TableRowDataPipeModule { }
