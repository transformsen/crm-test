import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CallerDetailsComponent } from './caller-details.component';
import {ContentTitleModule} from '../../../common/content-title/content-title.module';
import {SelectFieldModule} from '../../../common/fields/select-field/select-field.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MemberValidationStoreModule} from '../../../../stores/member-validation-store/member-validation-store.module';



@NgModule({
  declarations: [CallerDetailsComponent],
  exports: [
    CallerDetailsComponent
  ],
  imports: [
    CommonModule,
    ContentTitleModule,
    SelectFieldModule,
    FlexLayoutModule,
    MemberValidationStoreModule,
  ]
})
export class CallerDetailsModule { }
