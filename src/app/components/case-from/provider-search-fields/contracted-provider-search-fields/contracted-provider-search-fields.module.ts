import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractedProviderSearchFieldsComponent } from './contracted-provider-search-fields.component';
import {NpiFieldModule} from '../../../common/fields/npi-field/npi-field.module';
import {InputFieldModule} from '../../../common/fields/input-field/input-field.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {TaxIdFieldModule} from '../../../common/fields/tax-id-field/tax-id-field.module';
import {NameFieldModule} from '../../../common/fields/name-field/name-field.module';



@NgModule({
  declarations: [ContractedProviderSearchFieldsComponent],
  exports: [
    ContractedProviderSearchFieldsComponent
  ],
  imports: [
    CommonModule,
    NpiFieldModule,
    FlexLayoutModule,
    TaxIdFieldModule,
    NameFieldModule
  ]
})
export class ContractedProviderSearchFieldsModule { }
