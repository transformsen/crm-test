import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicValidationRoutingModule } from './basic-validation-routing.module';
import { BasicValidationComponent } from './basic-validation.component';
import {HeaderModule} from '../../../components/common/header/header.module';
import {DivModule} from '../../../components/common/div/div.module';
import {BasicMemberValidationModule} from '../../../components/validation/basic-validation/basic-member-validation/basic-member-validation.module';
import {SearchStoreModule} from '../../../stores/search-store/search-store.module';
import {CaseFromStoreModule} from '../../../stores/case-from-store/case-from-store.module';
import {CaseAboutStoreModule} from '../../../stores/case-about-store/case-about-store.module';
import {BasicProviderValidationModule} from '../../../components/validation/basic-validation/basic-provider-validation/basic-provider-validation.module';
import {BasicSingleAboutValidationModule} from '../../../components/validation/basic-validation/basic-single-about-validation/basic-single-about-validation.module';
import {BasicSingleFromValidationModule} from '../../../components/validation/basic-validation/basic-single-from-validation/basic-single-from-validation.module';


@NgModule({
  declarations: [BasicValidationComponent],
  imports: [
    CommonModule,
    BasicValidationRoutingModule,
    HeaderModule,
    DivModule,
    BasicMemberValidationModule,
    SearchStoreModule,
    CaseFromStoreModule,
    CaseAboutStoreModule,
    BasicProviderValidationModule,
    BasicSingleAboutValidationModule,
    BasicSingleFromValidationModule,
  ]
})
export class BasicValidationModule { }
