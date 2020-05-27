import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicMemberCaseAboutComponent } from './basic-member-case-about.component';
import {MemberCaseAboutItemModule} from '../../../member-validation/member-case-about-item/member-case-about-item.module';
import {IconChevronUpModule} from '../../../../common/icons/icon-chevron-up/icon-chevron-up.module';
import {IconChevronDownModule} from '../../../../common/icons/icon-chevron-down/icon-chevron-down.module';
import {FieldCheckboxModule} from '../../../../common/field-checkbox/field-checkbox.module';
import {CreateCaseButtonModule} from '../../../../common/buttons/create-case-button/create-case-button.module';
import {HipaaMatrixButtonModule} from '../../../common/hipaa-matrix-button/hipaa-matrix-button.module';
import {BasicHipaaPathwaysModule} from '../../basic-hipaa-pathways/basic-hipaa-pathways.module';
import {FlexLayoutModule} from '@angular/flex-layout';



@NgModule({
  declarations: [BasicMemberCaseAboutComponent],
  exports: [
    BasicMemberCaseAboutComponent
  ],
  imports: [
    CommonModule,
    MemberCaseAboutItemModule,
    IconChevronUpModule,
    IconChevronDownModule,
    FieldCheckboxModule,
    CreateCaseButtonModule,
    HipaaMatrixButtonModule,
    BasicHipaaPathwaysModule,
    FlexLayoutModule
  ]
})
export class BasicMemberCaseAboutModule { }
