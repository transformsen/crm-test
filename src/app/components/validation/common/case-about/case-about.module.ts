import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaseAboutComponent } from './case-about.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ContentTitleModule} from '../../../common/content-title/content-title.module';



@NgModule({
  declarations: [CaseAboutComponent],
  exports: [
    CaseAboutComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ContentTitleModule,
  ]
})
export class CaseAboutModule { }
