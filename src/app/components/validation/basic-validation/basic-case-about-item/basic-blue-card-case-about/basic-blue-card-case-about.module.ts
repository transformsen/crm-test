import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicBlueCardCaseAboutComponent } from './basic-blue-card-case-about.component';
import {CreateCaseButtonModule} from '../../../../common/buttons/create-case-button/create-case-button.module';



@NgModule({
  declarations: [BasicBlueCardCaseAboutComponent],
  exports: [
    BasicBlueCardCaseAboutComponent
  ],
  imports: [
    CommonModule,
    CreateCaseButtonModule
  ]
})
export class BasicBlueCardCaseAboutModule { }
