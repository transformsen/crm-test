import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProviderSearchFieldsComponent } from './provider-search-fields.component';
import {SelectFieldModule} from '../../common/fields/select-field/select-field.module';
import {ContractedProviderSearchFieldsModule} from './contracted-provider-search-fields/contracted-provider-search-fields.module';
import {CaseFromStoreModule} from '../../../stores/case-from-store/case-from-store.module';
import {NonContractedProviderCaptureFieldsModule} from './non-contracted-provider-capture-fields/non-contracted-provider-capture-fields.module';
import {ProviderPracticeLocationSearchFieldsModule} from './provider-practice-location-search-fields/provider-practice-location-search-fields.module';



@NgModule({
  declarations: [ProviderSearchFieldsComponent],
  exports: [
    ProviderSearchFieldsComponent
  ],
  imports: [
    CommonModule,
    SelectFieldModule,
    ContractedProviderSearchFieldsModule,
    CaseFromStoreModule,
    NonContractedProviderCaptureFieldsModule,
    ProviderPracticeLocationSearchFieldsModule,
  ]
})
export class ProviderSearchFieldsModule { }
