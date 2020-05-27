import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicContractedProviderCaseAboutComponent } from './basic-contracted-provider-case-about.component';
import {IconChevronUpModule} from '../../../../common/icons/icon-chevron-up/icon-chevron-up.module';
import {IconChevronDownModule} from '../../../../common/icons/icon-chevron-down/icon-chevron-down.module';
import {FieldCheckboxModule} from '../../../../common/field-checkbox/field-checkbox.module';
import {BasicHipaaPathwaysModule} from '../../basic-hipaa-pathways/basic-hipaa-pathways.module';
import {CreateCaseButtonModule} from '../../../../common/buttons/create-case-button/create-case-button.module';
import {HipaaMatrixButtonModule} from '../../../common/hipaa-matrix-button/hipaa-matrix-button.module';



@NgModule({
  declarations: [BasicContractedProviderCaseAboutComponent],
  exports: [
    BasicContractedProviderCaseAboutComponent
  ],
  imports: [
    CommonModule,
    IconChevronUpModule,
    IconChevronDownModule,
    FieldCheckboxModule,
    BasicHipaaPathwaysModule,
    CreateCaseButtonModule,
    HipaaMatrixButtonModule
  ]
})
export class BasicContractedProviderCaseAboutModule { }
