import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicCaseAboutItemComponent } from './basic-case-about-item.component';
import {BasicMemberCaseAboutModule} from './basic-member-case-about/basic-member-case-about.module';
import {BasicNonMemberCaseAboutModule} from './basic-non-member-case-about/basic-non-member-case-about.module';
import {BasicContractedProviderCaseAboutModule} from './basic-contracted-provider-case-about/basic-contracted-provider-case-about.module';
import {BasicNonContractedProviderCaseAboutModule} from './basic-non-contracted-provider-case-about/basic-non-contracted-provider-case-about.module';
import {
  ProviderPracticeLocationCaseAboutModule
} from './provider-practice-location-case-about/provider-practice-location-case-about.module';
import {BasicProducerCaseAboutModule} from './basic-producer-case-about/basic-producer-case-about.module';
import {BasicSubgroupCaseAboutModule} from './basic-subgroup-case-about/basic-subgroup-case-about.module';
import {BasicBlueCardCaseAboutModule} from './basic-blue-card-case-about/basic-blue-card-case-about.module';
import {BasicProspectCaseAboutModule} from './basic-prospect-case-about/basic-prospect-case-about.module';
import {BasicOtherCaseAboutModule} from './basic-other-case-about/basic-other-case-about.module';



@NgModule({
  declarations: [BasicCaseAboutItemComponent],
  exports: [
    BasicCaseAboutItemComponent
  ],
  imports: [
    CommonModule,
    BasicMemberCaseAboutModule,
    BasicNonMemberCaseAboutModule,
    BasicContractedProviderCaseAboutModule,
    BasicNonContractedProviderCaseAboutModule,
    ProviderPracticeLocationCaseAboutModule,
    BasicProducerCaseAboutModule,
    BasicSubgroupCaseAboutModule,
    BasicBlueCardCaseAboutModule,
    BasicProspectCaseAboutModule,
    BasicOtherCaseAboutModule
  ]
})
export class BasicCaseAboutItemModule { }
