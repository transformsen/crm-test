import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import {MatTableModule} from '@angular/material/table';
import {IconInfoCircleModule} from '../../icons/icon-info-circle/icon-info-circle.module';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatRadioModule} from '@angular/material/radio';
import {TableRowDataPipeModule} from '../../../../pipes/table-row-data-pipe/table-row-data-pipe.module';
import { CustomBodyCellDirective } from './custom/custom-body-cell.directive';
import {ModernPaginatorModule} from '../../paginator/modern-paginator/modern-paginator.module';



@NgModule({
  declarations: [TableComponent, CustomBodyCellDirective],
  exports: [
    TableComponent,
    CustomBodyCellDirective
  ],
  imports: [
    CommonModule,
    MatTableModule,
    IconInfoCircleModule,
    MatTooltipModule,
    MatRadioModule,
    TableRowDataPipeModule,
    ModernPaginatorModule
  ]
})
export class TableModule { }
