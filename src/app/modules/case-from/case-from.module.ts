import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaseFromRoutingModule } from './case-from-routing.module';
import { CaseFromComponent } from './case-from.component';
import {SearchTypeButtonsModule} from '../../components/case-from/search-type-buttons/search-type-buttons.module';
import {QuickSearchFieldsModule} from '../../components/case-from/quick-search-fields/quick-search-fields.module';
import {SearchButtonModule} from '../../components/common/buttons/search-button/search-button.module';
import {SearchControllersModule} from '../../components/common/search-controllers/search-controllers.module';
import {CaseFromStoreModule} from '../../stores/case-from-store/case-from-store.module';
import {TabNavigationModule} from '../../components/common/tab-navigation/tab-navigation.module';
import {HeaderModule} from '../../components/common/header/header.module';
import {MemberTableModule} from '../../components/common/tables/member-table/member-table.module';
import {ValidationButtonModule} from '../../components/common/buttons/validation-button/validation-button.module';
import {ValidationStoreModule} from '../../stores/validation/validation-store.module';
import {ProviderTableModule} from '../../components/common/tables/provider-table/provider-table.module';
import {CaseAboutButtonModule} from '../../components/common/buttons/case-about-button/case-about-button.module';
import {SnackbarModule} from '../../components/common/snackbar/snackbar.module';
import {SearchStoreModule} from '../../stores/search-store/search-store.module';
import {ProducerTableModule} from '../../components/common/tables/producer-table/producer-table.module';
import {ProviderSearchFieldsModule} from '../../components/case-from/provider-search-fields/provider-search-fields.module';
import {AdvancedProviderTableModule} from '../../components/common/tables/advanced-provider-table/advanced-provider-table.module';
import {SaveControllersModule} from '../../components/common/save-controllers/save-controllers.module';
import {ProviderLocationTableModule} from '../../components/common/tables/provider-location-table/provider-location-table.module';
import {ProducerSearchFieldsModule} from '../../components/case-from/producer-search-fields/producer-search-fields.module';
import {ProducerOrganizationTableModule} from '../../components/common/tables/producer-organization-table/producer-organization-table.module';
import {GroupSearchFieldsModule} from '../../components/case-from/group-search-fields/group-search-fields.module';
import {SubGroupTableModule} from '../../components/common/tables/sub-group-table/sub-group-table.module';
import {GroupTableModule} from '../../components/common/tables/group-table/group-table.module';
import {PlanToPlanSearchFieldsModule} from '../../components/case-from/plan-to-plan-search-fields/plan-to-plan-search-fields.module';
import {OtherTableModule} from '../../components/common/tables/other-table/other-table.module';
import {CaseAboutStoreModule} from '../../stores/case-about-store/case-about-store.module';
import { MemberSearchFieldsModule } from '../../components/case-about/member-search-fields/member-search-fields.module';


@NgModule({
  declarations: [CaseFromComponent],
  imports: [
    CommonModule,
    CaseFromRoutingModule,
    SearchTypeButtonsModule,
    QuickSearchFieldsModule,
    SearchButtonModule,
    SearchControllersModule,
    CaseFromStoreModule,
    TabNavigationModule,
    HeaderModule,
    MemberTableModule,
    ValidationButtonModule,
    ValidationStoreModule,
    ProviderTableModule,
    CaseAboutButtonModule,
    SnackbarModule,
    SearchStoreModule,
    ProducerTableModule,
    ProviderSearchFieldsModule,
    AdvancedProviderTableModule,
    SaveControllersModule,
    ProviderLocationTableModule,
    ProducerSearchFieldsModule,
    ProducerOrganizationTableModule,
    GroupSearchFieldsModule,
    SubGroupTableModule,
    GroupTableModule,
    PlanToPlanSearchFieldsModule,
    OtherTableModule,
    CaseAboutStoreModule,
    MemberSearchFieldsModule
  ]
})
export class CaseFromModule { }
