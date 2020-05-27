import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicMemberValidationComponent } from './basic-member-validation.component';
import {HeaderModule} from '../../../common/header/header.module';
import {BasicCaseFromItemModule} from '../basic-case-from-item/basic-case-from-item.module';
import {ContentTitleModule} from '../../../common/content-title/content-title.module';
import {DivModule} from '../../../common/div/div.module';
import {BasicCaseAboutItemModule} from '../basic-case-about-item/basic-case-about-item.module';



@NgModule({
  declarations: [BasicMemberValidationComponent],
  exports: [
    BasicMemberValidationComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    BasicCaseFromItemModule,
    ContentTitleModule,
    DivModule,
    BasicCaseAboutItemModule
  ]
})
export class BasicMemberValidationModule { }
