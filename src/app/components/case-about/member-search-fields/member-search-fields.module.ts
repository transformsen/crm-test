import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberSearchFieldsComponent } from './member-search-fields.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {InputFieldModule} from '../../common/fields/input-field/input-field.module';
import {PolicyIdFieldModule} from '../../common/fields/policy-id-field/policy-id-field.module';
import {DateOfBirthFieldModule} from '../../common/fields/date-of-birth-field/date-of-birth-field.module';
import {CityFieldModule} from '../../common/fields/city-field/city-field.module';
import {SsnFieldModule} from '../../common/fields/ssn-field/ssn-field.module';
import {StateFieldModule} from '../../common/fields/state-field/state-field.module';



@NgModule({
  declarations: [MemberSearchFieldsComponent],
  exports: [
    MemberSearchFieldsComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    InputFieldModule,
    PolicyIdFieldModule,
    DateOfBirthFieldModule,
    CityFieldModule,
    SsnFieldModule,
    StateFieldModule
  ]
})
export class MemberSearchFieldsModule { }
