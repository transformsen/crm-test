import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProducerOrganizationTableComponent } from './producer-organization-table.component';
import {TableModule} from '../table/table.module';



@NgModule({
  declarations: [ProducerOrganizationTableComponent],
  exports: [
    ProducerOrganizationTableComponent
  ],
  imports: [
    CommonModule,
    TableModule
  ]
})
export class ProducerOrganizationTableModule { }
