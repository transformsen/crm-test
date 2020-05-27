import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProducerOrganizationSearchFieldsComponent } from './producer-organization-search-fields.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NameFieldModule} from '../../../common/fields/name-field/name-field.module';



@NgModule({
  declarations: [ProducerOrganizationSearchFieldsComponent],
  exports: [
    ProducerOrganizationSearchFieldsComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    NameFieldModule
  ]
})
export class ProducerOrganizationSearchFieldsModule { }
