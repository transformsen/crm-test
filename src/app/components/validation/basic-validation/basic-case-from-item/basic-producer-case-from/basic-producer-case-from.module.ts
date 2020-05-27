import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicProducerCaseFromComponent } from './basic-producer-case-from.component';
import { IconArrowUpModule } from 'src/app/components/common/icons/icon-arrow-up/icon-arrow-up.module';
import { IconArrowDownModule } from 'src/app/components/common/icons/icon-arrow-down/icon-arrow-down.module';
import { FieldCheckboxModule } from 'src/app/components/common/field-checkbox/field-checkbox.module';
import { BasicHipaaPathwaysModule } from '../../basic-hipaa-pathways/basic-hipaa-pathways.module';
import { CreateCaseButtonModule } from 'src/app/components/common/buttons/create-case-button/create-case-button.module';
import { HipaaMatrixButtonModule } from '../../../common/hipaa-matrix-button/hipaa-matrix-button.module';

@NgModule({
  declarations: [BasicProducerCaseFromComponent],
  exports: [
    BasicProducerCaseFromComponent
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
export class BasicProducerCaseFromModule { }
