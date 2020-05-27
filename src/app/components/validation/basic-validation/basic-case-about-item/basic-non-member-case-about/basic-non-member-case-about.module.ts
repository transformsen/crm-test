import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicNonMemberCaseAboutComponent } from './basic-non-member-case-about.component';
import {IconChevronUpModule} from '../../../../common/icons/icon-chevron-up/icon-chevron-up.module';
import {IconChevronDownModule} from '../../../../common/icons/icon-chevron-down/icon-chevron-down.module';
import {BasicHipaaPathwaysModule} from '../../basic-hipaa-pathways/basic-hipaa-pathways.module';
import {CreateCaseButtonModule} from '../../../../common/buttons/create-case-button/create-case-button.module';
import {HipaaMatrixButtonModule} from '../../../common/hipaa-matrix-button/hipaa-matrix-button.module';
import {FieldCheckboxModule} from '../../../../common/field-checkbox/field-checkbox.module';



@NgModule({
  declarations: [BasicNonMemberCaseAboutComponent],
  exports: [
    BasicNonMemberCaseAboutComponent
  ],
  imports: [
    CommonModule,
    IconChevronUpModule,
    IconChevronDownModule,
    BasicHipaaPathwaysModule,
    CreateCaseButtonModule,
    HipaaMatrixButtonModule,
    FieldCheckboxModule
  ]
})
export class BasicNonMemberCaseAboutModule { }
