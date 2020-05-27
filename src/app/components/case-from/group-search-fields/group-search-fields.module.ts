import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupSearchFieldsComponent } from './group-search-fields.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NameFieldModule} from '../../common/fields/name-field/name-field.module';



@NgModule({
  declarations: [GroupSearchFieldsComponent],
  exports: [
    GroupSearchFieldsComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    NameFieldModule
  ]
})
export class GroupSearchFieldsModule { }
