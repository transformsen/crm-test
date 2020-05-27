import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicSingleFromValidationComponent } from './basic-single-from-validation.component';
import {ContentTitleModule} from '../../../common/content-title/content-title.module';
import {BasicCaseFromItemModule} from '../basic-case-from-item/basic-case-from-item.module';
import {HeaderModule} from '../../../common/header/header.module';



@NgModule({
  declarations: [BasicSingleFromValidationComponent],
  exports: [
    BasicSingleFromValidationComponent
  ],
  imports: [
    CommonModule,
    ContentTitleModule,
    BasicCaseFromItemModule,
    HeaderModule
  ]
})
export class BasicSingleFromValidationModule { }
