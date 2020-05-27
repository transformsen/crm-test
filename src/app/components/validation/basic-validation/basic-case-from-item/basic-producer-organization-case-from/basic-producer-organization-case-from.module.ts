import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicProducerOrganizationCaseFromComponent } from './basic-producer-organization-case-from.component';
import {IconArrowUpModule} from '../../../../common/icons/icon-arrow-up/icon-arrow-up.module';
import {IconArrowDownModule} from '../../../../common/icons/icon-arrow-down/icon-arrow-down.module';
import {FieldCheckboxModule} from '../../../../common/field-checkbox/field-checkbox.module';
import {BasicHipaaPathwaysModule} from '../../basic-hipaa-pathways/basic-hipaa-pathways.module';
import {CreateCaseButtonModule} from '../../../../common/buttons/create-case-button/create-case-button.module';
import {HipaaMatrixButtonModule} from '../../../common/hipaa-matrix-button/hipaa-matrix-button.module';



@NgModule({
  declarations: [BasicProducerOrganizationCaseFromComponent],
  exports: [
    BasicProducerOrganizationCaseFromComponent
  ],
  imports: [
    CommonModule,
    IconArrowUpModule,
    IconArrowDownModule,
    FieldCheckboxModule,
    BasicHipaaPathwaysModule,
    CreateCaseButtonModule,
    HipaaMatrixButtonModule
  ]
})
export class BasicProducerOrganizationCaseFromModule { }
