import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaseAboutRoutingModule } from './case-about-routing.module';
import { CaseAboutComponent } from './case-about.component';
import {CaseFromStoreModule} from '../../stores/case-from-store/case-from-store.module';
import {HeaderModule} from '../../components/common/header/header.module';
import {TabNavigationModule} from '../../components/common/tab-navigation/tab-navigation.module';
import {SelectFieldModule} from '../../components/common/fields/select-field/select-field.module';
import {MemberSearchFieldsModule} from '../../components/case-about/member-search-fields/member-search-fields.module';
import {SearchControllersModule} from '../../components/common/search-controllers/search-controllers.module';
import {CaseAboutStoreModule} from '../../stores/case-about-store/case-about-store.module';
import {MemberTableModule} from '../../components/common/tables/member-table/member-table.module';
import {ValidationButtonModule} from '../../components/common/buttons/validation-button/validation-button.module';
import {SnackbarModule} from '../../components/common/snackbar/snackbar.module';
import {InputFieldModule} from '../../components/common/fields/input-field/input-field.module';
import {ProspectInputFieldsModule} from '../../components/case-about/prospect-input-fields/prospect-input-fields.module';
import {BlueCardInputFieldsModule} from '../../components/case-about/blue-card-input-fields/blue-card-input-fields.module';
import {OtherInputFieldsModule} from '../../components/case-about/other-input-fields/other-input-fields.module';
import {ContinueButtonModule} from '../../components/common/buttons/continue-button/continue-button.module';


@NgModule({
  declarations: [CaseAboutComponent],
  imports: [
    CommonModule,
    CaseAboutRoutingModule,
    CaseFromStoreModule,
    HeaderModule,
    TabNavigationModule,
    SelectFieldModule,
    MemberSearchFieldsModule,
    SearchControllersModule,
    CaseAboutStoreModule,
    MemberTableModule,
    ValidationButtonModule,
    SnackbarModule,
    InputFieldModule,
    ProspectInputFieldsModule,
    BlueCardInputFieldsModule,
    OtherInputFieldsModule,
    ContinueButtonModule,
  ],
})
export class CaseAboutModule { }
