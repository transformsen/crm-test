import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicSingleAboutValidationComponent } from './basic-single-about-validation.component';
import {HeaderModule} from '../../../common/header/header.module';
import {BasicCaseAboutItemModule} from '../basic-case-about-item/basic-case-about-item.module';



@NgModule({
  declarations: [BasicSingleAboutValidationComponent],
  exports: [
    BasicSingleAboutValidationComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    BasicCaseAboutItemModule
  ]
})
export class BasicSingleAboutValidationModule { }
