import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicProspectCaseAboutComponent } from './basic-prospect-case-about.component';
import {CreateCaseButtonModule} from '../../../../common/buttons/create-case-button/create-case-button.module';



@NgModule({
  declarations: [BasicProspectCaseAboutComponent],
  exports: [
    BasicProspectCaseAboutComponent
  ],
  imports: [
    CommonModule,
    CreateCaseButtonModule
  ]
})
export class BasicProspectCaseAboutModule { }
