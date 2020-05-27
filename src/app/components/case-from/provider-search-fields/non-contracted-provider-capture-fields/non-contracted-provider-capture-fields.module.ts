import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NonContractedProviderCaptureFieldsComponent } from './non-contracted-provider-capture-fields.component';
import {NpiFieldModule} from '../../../common/fields/npi-field/npi-field.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {StateFieldModule} from '../../../common/fields/state-field/state-field.module';



@NgModule({
  declarations: [NonContractedProviderCaptureFieldsComponent],
  exports: [
    NonContractedProviderCaptureFieldsComponent
  ],
  imports: [
    CommonModule,
    NpiFieldModule,
    FlexLayoutModule,
    StateFieldModule
  ]
})
export class NonContractedProviderCaptureFieldsModule { }
