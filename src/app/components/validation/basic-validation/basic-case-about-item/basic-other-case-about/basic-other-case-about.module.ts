import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicOtherCaseAboutComponent } from './basic-other-case-about.component';
import {CreateCaseButtonModule} from '../../../../common/buttons/create-case-button/create-case-button.module';



@NgModule({
  declarations: [BasicOtherCaseAboutComponent],
  exports: [
    BasicOtherCaseAboutComponent
  ],
  imports: [
    CommonModule,
    CreateCaseButtonModule
  ]
})
export class BasicOtherCaseAboutModule { }
