import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberCaseAboutItemComponent } from './member-case-about-item.component';
import {IconChevronUpModule} from '../../../common/icons/icon-chevron-up/icon-chevron-up.module';
import {IconChevronDownModule} from '../../../common/icons/icon-chevron-down/icon-chevron-down.module';
import {MemberValidationHipaaPathwayModule} from '../member-validation-hipaa-pathway/member-validation-hipaa-pathway.module';
import {CreateCaseButtonModule} from '../../../common/buttons/create-case-button/create-case-button.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FieldCheckboxModule} from '../../../common/field-checkbox/field-checkbox.module';
import {HipaaMatrixButtonModule} from '../../common/hipaa-matrix-button/hipaa-matrix-button.module';



@NgModule({
  declarations: [MemberCaseAboutItemComponent],
  exports: [
    MemberCaseAboutItemComponent
  ],
  imports: [
    CommonModule,
    IconChevronUpModule,
    IconChevronDownModule,
    MemberValidationHipaaPathwayModule,
    CreateCaseButtonModule,
    FlexLayoutModule,
    FieldCheckboxModule,
    HipaaMatrixButtonModule
  ]
})
export class MemberCaseAboutItemModule { }
