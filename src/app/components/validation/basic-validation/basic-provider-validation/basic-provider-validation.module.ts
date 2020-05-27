import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicProviderValidationComponent } from './basic-provider-validation.component';
import {ContentTitleModule} from '../../../common/content-title/content-title.module';
import {BasicCaseAboutItemModule} from '../basic-case-about-item/basic-case-about-item.module';
import {DivModule} from '../../../common/div/div.module';
import {HeaderModule} from '../../../common/header/header.module';



@NgModule({
  declarations: [BasicProviderValidationComponent],
  exports: [
    BasicProviderValidationComponent
  ],
  imports: [
    CommonModule,
    ContentTitleModule,
    BasicCaseAboutItemModule,
    DivModule,
    HeaderModule
  ]
})
export class BasicProviderValidationModule { }
