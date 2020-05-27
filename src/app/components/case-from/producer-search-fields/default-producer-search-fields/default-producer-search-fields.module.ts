import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultProducerSearchFieldsComponent } from './default-producer-search-fields.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NpnFieldModule} from '../../../common/fields/npn-field/npn-field.module';
import {NameFieldModule} from '../../../common/fields/name-field/name-field.module';



@NgModule({
  declarations: [DefaultProducerSearchFieldsComponent],
  exports: [
    DefaultProducerSearchFieldsComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    NpnFieldModule,
    NameFieldModule,
  ]
})
export class DefaultProducerSearchFieldsModule { }
