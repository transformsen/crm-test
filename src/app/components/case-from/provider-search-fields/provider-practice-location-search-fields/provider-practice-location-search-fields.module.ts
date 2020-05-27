import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProviderPracticeLocationSearchFieldsComponent } from './provider-practice-location-search-fields.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NpiFieldModule} from '../../../common/fields/npi-field/npi-field.module';
import {NameFieldModule} from '../../../common/fields/name-field/name-field.module';
import {TaxIdFieldModule} from '../../../common/fields/tax-id-field/tax-id-field.module';



@NgModule({
  declarations: [ProviderPracticeLocationSearchFieldsComponent],
  exports: [
    ProviderPracticeLocationSearchFieldsComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    NpiFieldModule,
    NameFieldModule,
    TaxIdFieldModule
  ]
})
export class ProviderPracticeLocationSearchFieldsModule { }
