import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicCaseFromItemComponent } from './basic-case-from-item.component';
import {BasicProviderCaseFromModule} from './basic-provider-case-from/basic-provider-case-from.module';
import {
  BasicProducerOrganizationCaseFromModule
} from './basic-producer-organization-case-from/basic-producer-organization-case-from.module';
import {BasicGroupCaseFromModule} from './basic-group-case-from/basic-group-case-from.module';
import {BasicPlanCaseFromModule} from './basic-plan-case-from/basic-plan-case-from.module';
import {BasicOtherCaseFromModule} from './basic-other-case-from/basic-other-case-from.module';
import { BasicProducerCaseFromModule } from './basic-producer-case-from/basic-producer-case-from.module';
import { BasicSubgroupCaseFromModule } from './basic-subgroup-case-from/basic-subgroup-case-from.module';

@NgModule({
  declarations: [BasicCaseFromItemComponent],
  exports: [
    BasicCaseFromItemComponent
  ],
  imports: [
    CommonModule,
    BasicProviderCaseFromModule,
    BasicProducerOrganizationCaseFromModule,
    BasicProducerCaseFromModule,
    BasicGroupCaseFromModule,
    BasicPlanCaseFromModule,
    BasicOtherCaseFromModule,
    BasicSubgroupCaseFromModule
  ]
})
export class BasicCaseFromItemModule { }
