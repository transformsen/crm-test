import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicProviderCaseFromComponent } from './basic-provider-case-from.component';
import {IconArrowUpModule} from '../../../../common/icons/icon-arrow-up/icon-arrow-up.module';
import {IconArrowDownModule} from '../../../../common/icons/icon-arrow-down/icon-arrow-down.module';
import {FieldCheckboxModule} from '../../../../common/field-checkbox/field-checkbox.module';



@NgModule({
  declarations: [BasicProviderCaseFromComponent],
  exports: [
    BasicProviderCaseFromComponent
  ],
  imports: [
    CommonModule,
    IconArrowUpModule,
    IconArrowDownModule,
    FieldCheckboxModule
  ]
})
export class BasicProviderCaseFromModule { }
