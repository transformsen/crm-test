import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberValidationRoutingModule } from './member-validation-routing.module';
import { MemberValidationComponent } from './member-validation.component';
import {HeaderModule} from '../../../components/common/header/header.module';
import {CallerDetailsModule} from '../../../components/validation/member-validation/caller-details/caller-details.module';
import {DivModule} from '../../../components/common/div/div.module';
import {MemberValidationStoreModule} from '../../../stores/member-validation-store/member-validation-store.module';
import {CaseAboutModule} from '../../../components/validation/common/case-about/case-about.module';
import {SearchStoreModule} from '../../../stores/search-store/search-store.module';
import {CaseFromStoreModule} from '../../../stores/case-from-store/case-from-store.module';
import {MemberCaseAboutItemModule} from '../../../components/validation/member-validation/member-case-about-item/member-case-about-item.module';
import {ContentTitleModule} from '../../../components/common/content-title/content-title.module';
import {CciButtonModule} from '../../../components/validation/common/cci-button/cci-button.module';


@NgModule({
  declarations: [MemberValidationComponent],
  imports: [
    CommonModule,
    MemberValidationRoutingModule,
    MemberValidationStoreModule,
    HeaderModule,
    CallerDetailsModule,
    DivModule,
    CaseAboutModule,
    SearchStoreModule,
    CaseFromStoreModule,
    MemberCaseAboutItemModule,
    ContentTitleModule,
    CciButtonModule,
  ]
})
export class MemberValidationModule { }
