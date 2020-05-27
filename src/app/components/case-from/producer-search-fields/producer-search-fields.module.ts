import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProducerSearchFieldsComponent } from './producer-search-fields.component';
import {DefaultProducerSearchFieldsModule} from './default-producer-search-fields/default-producer-search-fields.module';
import {ProducerOrganizationSearchFieldsModule} from './producer-organization-search-fields/producer-organization-search-fields.module';
import {SelectFieldModule} from '../../common/fields/select-field/select-field.module';



@NgModule({
  declarations: [ProducerSearchFieldsComponent],
  imports: [
    CommonModule,
    DefaultProducerSearchFieldsModule,
    ProducerOrganizationSearchFieldsModule,
    SelectFieldModule
  ],
  exports: [
    ProducerSearchFieldsComponent,
  ]
})
export class ProducerSearchFieldsModule { }
