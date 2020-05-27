import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtherInputFieldsComponent } from './other-input-fields.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {CaseAboutStoreModule} from '../../../stores/case-about-store/case-about-store.module';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [OtherInputFieldsComponent],
  exports: [
    OtherInputFieldsComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    CaseAboutStoreModule,
    FormsModule,
  ]
})
export class OtherInputFieldsModule { }
