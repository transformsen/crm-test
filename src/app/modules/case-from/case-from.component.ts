import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {
  AppCaseFromProducerType,
  AppCaseFromProviderType,
  AppCaseFromSearchType, OtherInfoJson
} from '../../stores/case-from-store/case-from-store.reducer';
import { Store } from '@ngrx/store';
import { SubscriptionInventory } from '../../utils/subscribe.util';
import {
  getCaseFromPage,
  getCaseFromProducerType,
  getCaseFromProviderType,
  getCaseFromSearchFields,
  getCaseFromSearchType,
  getCaseFromSelectedGroup,
  getCaseFromSelectedMember,
  getCaseFromSelectedOther,
  getCaseFromSelectedPlan,
  getCaseFromSelectedProducer,
  getCaseFromSelectedProvider,
  getCaseFromSize
} from '../../stores/case-from-store/case-from-store.selectors';
import * as _ from 'lodash';
import { combineLatest } from 'rxjs';
import { DataService } from '../../services/data.service';
import { isValidString } from '../../utils/validation.util';
import { MemberResultJson } from '../../models/data/member-result';
import { PagingChangeEvent } from '../../components/common/paginator/common/paginator-common.component';
import {
  setCaseFromGroupType, setCaseFromItemType,
  setCaseFromPaging, setCaseFromProviderType, setCaseFromSearchFields, setCaseFromSearchType, setCaseFromSelectedGroup,
  setCaseFromSelectedMember, setCaseFromSelectedOther, setCaseFromSelectedPlan, setCaseFromSelectedProducer,
  setCaseFromSelectedProvider
} from '../../stores/case-from-store/case-from-store.actions';
import { TabItem } from '../../models/component/tab-item';
import { clearMainStore } from '../../stores/main-store/main-store.actions';
import { Router } from '@angular/router';
import { setValidationType } from '../../stores/validation/validation-store.actions';
import { ProviderResultJson } from '../../models/data/provider-result';
import { SearchBaseComponent } from '../common/search-base.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { setSearchSelectedCaseAbout, setSearchSelectedCaseFrom } from '../../stores/search-store/search-store.actions';
import { setCaseAboutItemType, setCaseAboutType } from '../../stores/case-about-store/case-about-store.actions';
import { QuickSearchFieldsComponent } from '../../components/case-from/quick-search-fields/quick-search-fields.component';
import { ProducerResultJson } from '../../models/data/producer-result';
import { ProviderSearchFieldsComponent } from '../../components/case-from/provider-search-fields/provider-search-fields.component';
import { ProducerSearchFieldsComponent } from '../../components/case-from/producer-search-fields/producer-search-fields.component';
import { GroupSearchFieldsComponent } from '../../components/case-from/group-search-fields/group-search-fields.component';
import { GroupResultJson } from '../../models/data/group-result';
import { PlanToPlanJson } from '../../models/data/plan-to-plan';
import {
  PlanToPlanSearchFieldsComponent
} from '../../components/case-from/plan-to-plan-search-fields/plan-to-plan-search-fields.component';
import { delay } from 'rxjs/operators';
import { getCallerInfoExistence } from '../../stores/main-store/main-store.selectors';
import { HeaderComponent } from 'src/app/components/common/header/header.component';
import { MemberSearchFieldsComponent } from '../../components/case-about/member-search-fields/member-search-fields.component';

export type AppSearchResultType = 'provider' | 'producer' | 'group' | 'planToPlan' | 'member';

@Component({
  selector: 'app-case-from',
  templateUrl: './case-from.component.html',
  styleUrls: ['./case-from.component.scss']
})
export class CaseFromComponent extends SearchBaseComponent implements OnInit, OnDestroy {
  // quick search fields
  @ViewChild(QuickSearchFieldsComponent) quickSearchFields: QuickSearchFieldsComponent;
  // provider search fields
  @ViewChild(ProviderSearchFieldsComponent) providerSearchFields: ProviderSearchFieldsComponent;
  // producer search fields
  @ViewChild(ProducerSearchFieldsComponent) producerSearchFields: ProducerSearchFieldsComponent;
  // group search fields
  @ViewChild(GroupSearchFieldsComponent) groupSearchFields: GroupSearchFieldsComponent;
  // plan to plan search fields
  @ViewChild(PlanToPlanSearchFieldsComponent) planToPlanSearchFields: PlanToPlanSearchFieldsComponent;
  // header fields
  @ViewChild(HeaderComponent) headerComponent: HeaderComponent;
  // member search fields
  @ViewChild(MemberSearchFieldsComponent) memberSearchFields: MemberSearchFieldsComponent;


  // search type
  searchType: AppCaseFromSearchType = 'quickSearch';
  // provider type
  providerType: AppCaseFromProviderType = 'contractedProvider';
  // producer type
  producerType: AppCaseFromProducerType = 'producer';
  // search result type
  searchResultType: AppSearchResultType;
  // selected member
  selectedMember: MemberResultJson;
  // selected provider
  selectedProvider: ProviderResultJson;
  // selected producer
  selectedProducer: ProducerResultJson;
  // selected group
  selectedGroup: GroupResultJson;
  // selected plan
  selectedPlan: PlanToPlanJson;
  // selected other
  selectedOther: OtherInfoJson;
  // default tabs
  defaultTabs: TabItem[] = [
    new TabItem('Case From', '/case-from'),
    new TabItem('Case About', '/case-about'),
  ];
  // only display case from tab when member is selected
  memberTabs: TabItem[] = [
    new TabItem('Case From', '/case-from'),
  ];
  // subscription inventory
  private inventory: SubscriptionInventory = new SubscriptionInventory();
  // subscription keys for inventory
  private subKeys = {
    callerAndCallbackNumber: 'callerAndCallbackNumber',
    callerInfoExistence: 'callerInfoExistence',
    searchType: 'searchType',
    providerType: 'providerType',
    producerType: 'producerType',
    fields: 'fields',
    selectedMember: 'selectedMember',
    selectedProvider: 'selectedProvider',
    selectedProducer: 'selectedProducer',
    selectedGroup: 'selectedGroup',
    selectedPlan: 'selectedPlan',
    selectedOther: 'selectedOther',
    getMembers: 'getMembers',
    getProviders: 'getProviders',
    getProducers: 'getProducers',
    getGroups: 'getGroups',
    getPaging: 'getPaging',
  };
  // initialized state
  private initialized = false;
  // keep selection state for searching
  // set true to keep previous selection
  private keepSelection = false;
  // previous search fields
  // if previous search fields is exists,
  // this will be replace stored fields on destroy
  private previousSearchFields: any = null;
  // previous search type
  // if previous search type is exists,
  // this will be replace stored search type on destroy
  private previousSearchType: AppCaseFromSearchType;
  // state for non contracted provider initialized
  private nonContractedInitialized = true;

  private sortOption = {
    sortBy: 'firstName',
    sortDirection: 'asc'
  };

  constructor(
    protected store: Store,
    private router: Router,
    private dataService: DataService,
    private matSnackBar: MatSnackBar,
  ) {
    super(
      store,
    );
  }

  ngOnInit(): void {
    super.ngOnInit();

    this.getSearchType();
    this.getProviderType();
    this.getProducerType();

    this.getSearchFields();
    this.getSelectedMember();
    this.getSelectedProvider();
    this.getSelectedProducer();
    this.getSelectedGroup();
    this.getSelectedPlan();
    this.getSelectedOther();
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
    this.inventory.unSubscribeAll();

    if (!this.keepSelection) {
      this.clearAllSelection();
    }

    this.setPagingData();
    this.restorePreviousSearchFieldsAndType();
  }

  /**
   * get search type from the store
   */
  private getSearchType() {
    // unsubscribe stored subscription
    this.inventory.unSubscribe(this.subKeys.searchType);

    const sub = this.store
      .select(getCaseFromSearchType)
      .subscribe({
        next: res => {
          this.searchType = res;

          if (this.searchType === 'other') {
            // if search type is other,
            // set selectedOther when both caller name and number are exists
            this.getCallerInfoExistence();
          }
        },
      });

    // store subscription
    this.inventory.store(this.subKeys.searchType, sub);
  }

  /**
   * get caller info existence state
   */
  private getCallerInfoExistence() {
    this.inventory.unSubscribe(this.subKeys.callerInfoExistence);

    const sub = this.store
      .select(getCallerInfoExistence)
      .pipe(delay(0))
      .subscribe({
        next: res => {
          if (res) {
            this.store.dispatch(setCaseFromSelectedOther({
              selectedOther: {
                callerName: this.callerName,
                callbackNumber: this.callbackNumber,
              },
            }));
          }
        },
      });

    this.inventory.store(this.subKeys.callerInfoExistence, sub);
  }

  /**
   * get provider type
   */
  private getProviderType() {
    this.inventory.unSubscribe(this.subKeys.providerType);

    const sub = this.store
      .select(getCaseFromProviderType)
      .subscribe({
        next: res => {
          this.providerType = res;
          this.data = [];
        },
      });

    this.inventory.store(this.subKeys.providerType, sub);
  }

  /**
   * get producer type
   */
  private getProducerType() {
    this.inventory.unSubscribe(this.subKeys.producerType);

    const sub = this.store
      .select(getCaseFromProducerType)
      .subscribe({
        next: res => {
          this.producerType = res;
          this.data = [];
        },
      });

    this.inventory.store(this.subKeys.producerType, sub);
  }

  /**
   * get search fields
   */
  private getSearchFields() {
    // unsubscribe stored subscription
    this.inventory.unSubscribe(this.subKeys.fields);

    const sub = this.store
      .select(getCaseFromSearchFields)
      .subscribe({
        next: res => {
          this.fields = _.cloneDeep(res);
          this.checkFieldsToTriggerSearch();
        },
      });

    // store subscription
    this.inventory.store(this.subKeys.fields, sub);
  }

  /**
   * check fields to trigger search
   * at least on property has value, get paging data and trigger search
   */
  private checkFieldsToTriggerSearch() {
    if (this.fields && !this.initialized) {
      if (Object.keys(this.fields).some(key => isValidString(this.fields[key]))) {
        // preserve previous search fields and search type
        this.previousSearchFields = _.cloneDeep(this.fields);
        this.previousSearchType = this.searchType;
        // keep selection
        this.keepSelection = true;
        this.searchAutomatically();
      }

      this.initialized = true;
    }
  }

  /**
   * trigger search automatically with paging information
   */
  private searchAutomatically() {
    // unsubscribe stored subscription
    this.inventory.unSubscribe(this.subKeys.getPaging);
    // set non contracted initialized to false
    // this will mute saved snackbar
    this.nonContractedInitialized = false;

    const sub = combineLatest([
      this.store.select(getCaseFromPage),
      this.store.select(getCaseFromSize),
    ]).pipe(delay(0))
      .subscribe({
        next: res => {
          this.page = res[0];
          this.size = res[1];

          if (this.selectedPlan) {
            this.store.dispatch(setCaseFromSearchFields({
              fields: {
                planToPlan: this.selectedPlan as any,
              },
            }));
          } else if (!this.selectedOther) {
            this.onSearchClicked(this.page, this.size);
          }
        },
      });

    // store subscription
    this.inventory.store(this.subKeys.getPaging, sub);
  }

  /**
   * get selected member from store
   */
  private getSelectedMember() {
    // unsubscribe stored subscription
    this.inventory.unSubscribe(this.subKeys.selectedMember);

    const sub = this.store
      .select(getCaseFromSelectedMember)
      .subscribe({
        next: res => {
          this.selectedMember = _.cloneDeep(res);
        },
      });

    // store subscription
    this.inventory.store(this.subKeys.selectedMember, sub);
  }

  /**
   * get selected provider form store
   */
  private getSelectedProvider() {
    // unsubscribe stored subscription
    this.inventory.unSubscribe(this.subKeys.selectedProvider);

    const sub = this.store
      .select(getCaseFromSelectedProvider)
      .subscribe({
        next: res => {
          this.selectedProvider = _.cloneDeep(res);
        },
      });

    // store subscription
    this.inventory.store(this.subKeys.selectedProvider, sub);
  }

  /**
   * get selected producer from store
   */
  private getSelectedProducer() {
    this.inventory.unSubscribe(this.subKeys.selectedProducer);

    const sub = this.store
      .select(getCaseFromSelectedProducer)
      .subscribe({
        next: res => {
          this.selectedProducer = _.cloneDeep(res);
        },
      });

    this.inventory.store(this.subKeys.selectedProducer, sub);
  }

  /**
   * get selected group from store
   */
  private getSelectedGroup() {
    this.inventory.unSubscribe(this.subKeys.selectedGroup);

    const sub = this.store
      .select(getCaseFromSelectedGroup)
      .subscribe({
        next: res => {
          this.selectedGroup = _.cloneDeep(res);
        },
      });

    this.inventory.store(this.subKeys.selectedGroup, sub);
  }

  /**
   * get selected plan from store
   */
  private getSelectedPlan() {
    this.inventory.unSubscribe(this.subKeys.selectedPlan);

    const sub = this.store
      .select(getCaseFromSelectedPlan)
      .subscribe({
        next: res => {
          this.selectedPlan = _.cloneDeep(res);
        },
      });

    this.inventory.store(this.subKeys.selectedPlan, sub);
  }

  /**
   * get selected other from store
   */
  private getSelectedOther() {
    this.inventory.unSubscribe(this.subKeys.selectedOther);

    const sub = this.store
      .select(getCaseFromSelectedOther)
      .subscribe({
        next: res => {
          this.selectedOther = _.cloneDeep(res);
        },
      });

    this.inventory.store(this.subKeys.selectedOther, sub);
  }

  /**
   * handle search clicked event
   * @param page page number
   * @param size size number
   */
  onSearchClicked(page = 0, size = this.size) {
    let hasError = false;
    if (!this.headerComponent.callerName || !this.headerComponent.callerName.trim()) {
      hasError = true;
      this.headerComponent.errors.callerNameError = 'Required';
    }

    if (!this.headerComponent.callbackNumber || !this.headerComponent.callbackNumber.trim()) {
      hasError = true;
      this.headerComponent.errors.callbackNumberError = 'Required';
    } else {
      if (!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.exec(this.callbackNumber)) {
        hasError = true;
        this.headerComponent.errors.callbackNumberError = 'Invalid phone number';
      }
    }

    if (!hasError) {
      if (!this.searchDisabled) {
        // clear all selection
        if (!this.keepSelection) {
          this.clearAllSelection();
        }

        // preserve search fields on search clicked
        this.preserveSearchFields();

        switch (this.searchType) {
          case 'quickSearch': {
            this.onQuickSearchSubmitted(page, size);
            break;
          }

          case 'provider': {
            this.onProviderSearchSubmitted(page, size);
            break;
          }

          case 'producer': {
            this.onProducerSearchSubmitted(page, size);
            break;
          }

          case 'group': {
            this.onGroupSearchSubmitted(page, size);
            break;
          }

          case 'member': {
            this.onMemberPagingChanged({ page, size });
            break;
          }
        }

        // set keep selection as false
        this.keepSelection = false;
      } else {
        this.matSnackBar.open('Enter at least 1 search criteria.');
      }
    }
  }

  /**
   * handle clear search clicked event
   */
  onClearClicked() {
    // clear all stores
    this.store.dispatch(setCaseFromSearchFields({ fields: {} }));
    this.store.dispatch(clearMainStore({}));
    this.clearAllSelection();
    // clear table data
    this.data = [];
  }

  /**
   * handle quick search submitted
   * @param page page number
   * @param size size number
   */
  onQuickSearchSubmitted(page = 0, size = this.size) {
    if (this.searchMember) {
      // search members
      // show member table
      this.searchResultType = 'member';
      this.getMembers(page, size);
    } else if (this.searchProvider) {
      // search providers
      // show member table
      this.searchResultType = 'provider';
      this.getProviders(page, size);
    } else if (this.searchProducer) {
      // search producers
      // show member table
      this.searchResultType = 'producer';
      this.getProducers(page, size);
    }
  }

  /**
   * handle provider search submitted
   * @param page page
   * @param size size
   */
  onProviderSearchSubmitted(page = 0, size = this.size) {
    switch (this.providerType) {
      case 'contractedProvider': {
        // search providers
        // show member table
        this.getAdvancedProviders(page, size);
        break;
      }

      case 'nonContractedProvider': {
        this.onNonContractedSaveClick();
        break;
      }

      case 'providerPracticeLocation': {
        this.getProviderPracticeLocations(page, size);
        break;
      }
    }
  }

  /**
   * handle producer search submitted
   * @param page page
   * @param size size
   */
  onProducerSearchSubmitted(page = 0, size = this.size) {
    switch (this.producerType) {
      case 'producer': {
        this.getProducers(page, size);
        break;
      }

      case 'producerOrganization': {
        this.getProducerOrganizations(page, size);
        break;
      }
    }
  }

  /**
   * handle group search submitted
   * @param page page
   * @param size size
   */
  onGroupSearchSubmitted(page = 0, size = this.size) {
    if (this.searchSubGroup) {
      this.getSubGroups(page, size);
    } else {
      this.getGroups(page, size);
    }
  }

  /**
   * return true when search sub group
   */
  get searchSubGroup() {
    return this.preservedSearchFields.subGroupId || this.preservedSearchFields.subGroupName;
  }

  /**
   * get members from the backend
   * @param page page number
   * @param size size number
   */
  private getMembers(page: number = this.page, size: number = this.size) {
    // unsubscribe stored subscription
    this.inventory.unSubscribe(this.subKeys.getMembers);
    // clear selected member
    if (this.selectedMember && !this.keepSelection) {
      this.onMemberRowSelected(null);
    }

    const sub = this.dataService
      .getMembers({
        ...this.preservedSearchFields,
        page,
        size,
        sortBy: this.sortOption.sortBy,
        sortDirection: this.sortOption.sortDirection
      }, this.fields)
      .subscribe({
        next: res => {
          this.setRespondedData(res);
        },
      });

    // store subscription
    this.inventory.store(this.subKeys.getMembers, sub);
  }

  /**
   * return true when only policyId value is set
   */
  private get searchMember() {
    return isValidString(this.preservedSearchFields.policyId);
  }

  /**
   * get providers
   * @param page page number
   * @param size size number
   */
  private getProviders(page: number = this.page, size: number = this.size) {
    // unsubscribe stored subscription
    this.inventory.unSubscribe(this.subKeys.getProviders);
    // clear selected provider
    if (this.selectedProvider && !this.keepSelection) {
      this.onProviderRowSelected(null);
    }

    const sub = this.dataService
      .getProviders({
        ...this.preservedSearchFields,
        page,
        size,
      }, this.fields).subscribe({
        next: res => {
          this.setRespondedData(res);
        },
      });

    // store subscription
    this.inventory.store(this.subKeys.getProviders, sub);
  }

  /**
   * get advanced providers
   * @param page page number
   * @param size size number
   */
  private getAdvancedProviders(page: number = this.page, size: number = this.size) {
    // unsubscribe stored subscription
    this.inventory.unSubscribe(this.subKeys.getProviders);
    // clear selected provider
    if (this.selectedProvider && !this.keepSelection) {
      this.onProviderRowSelected(null);
    }

    const sub = this.dataService
      .getAdvancedProviders({
          ...this.preservedSearchFields,
          page,
          size,
      }, this.fields).subscribe({
        next: res => {
          this.setRespondedData(res);
        },
      });

    // store subscription
    this.inventory.store(this.subKeys.getProviders, sub);
  }

  /**
   * get provider practice locations
   * @param page page
   * @param size size
   */
  private getProviderPracticeLocations(page: number = this.page, size: number = this.size) {
    // unsubscribe stored subscription
    this.inventory.unSubscribe(this.subKeys.getProviders);
    // clear selected provider
    if (this.selectedProvider && !this.keepSelection) {
      this.onProviderRowSelected(null);
    }

    const sub = this.dataService
      .getProviderPracticeLocations({
        ...this.preservedSearchFields,
        page,
        size,
      }, this.fields).subscribe({
        next: res => {
          this.setRespondedData(res);
        },
      });

    // store subscription
    this.inventory.store(this.subKeys.getProviders, sub);
  }

  /**
   * return true when only npi value is set
   */
  private get searchProvider() {
    return isValidString(this.preservedSearchFields.npi);
  }

  /**
   * get producers
   * @param page page
   * @param size size
   */
  private getProducers(page = this.page, size = this.size) {
    this.inventory.unSubscribe(this.subKeys.getProducers);
    // clear selected provider
    if (this.selectedProducer && !this.keepSelection) {
      this.onProducerRowSelected(null);
    }

    const sub = this.dataService
      .getProducers({
        ...this.preservedSearchFields,
        page,
        size,
      }, this.fields)
      .subscribe({
        next: res => {
          this.setRespondedData(res);
        },
      });

    this.inventory.store(this.subKeys.getProducers, sub);
  }

  /**
   * get producer organizations
   * @param page page
   * @param size size
   */
  private getProducerOrganizations(page = this.page, size = this.size) {
    this.inventory.unSubscribe(this.subKeys.getProducers);
    // clear selected provider
    if (this.selectedProducer && !this.keepSelection) {
      this.onProducerRowSelected(null);
    }

    const sub = this.dataService
      .getProducerOrganization({
        ...this.preservedSearchFields,
        page,
        size,
      }, this.fields)
      .subscribe({
        next: res => {
          this.setRespondedData(res);
        },
      });

    this.inventory.store(this.subKeys.getProducers, sub);
  }

  /**
   * get groups
   * @param page page
   * @param size size
   */
  private getGroups(page = this.page, size = this.size) {
    this.inventory.unSubscribe(this.subKeys.getGroups);
    // clear selected group
    if (this.selectedGroup && !this.keepSelection) {
      this.onGroupRowSelected(null);
    }

    const sub = this.dataService
      .getGroups({
        ...this.preservedSearchFields,
        page,
        size,
      }, this.fields)
      .subscribe({
        next: res => {
          this.setRespondedData(res);
        },
      });

    this.inventory.store(this.subKeys.getGroups, sub);
  }

  /**
   * get groups
   * @param page page
   * @param size size
   */
  private getSubGroups(page = this.page, size = this.size) {
    this.inventory.unSubscribe(this.subKeys.getGroups);
    // clear selected group
    if (this.selectedGroup && !this.keepSelection) {
      this.onGroupRowSelected(null);
    }

    const sub = this.dataService
      .getSubGroups({
        ...this.preservedSearchFields,
        page,
        size,
      }, this.fields)
      .subscribe({
        next: res => {
          this.setRespondedData(res);
        },
      });

    this.inventory.store(this.subKeys.getGroups, sub);
  }

  /**
   * return true when only npn value is set
   */
  private get searchProducer() {
    return isValidString(this.preservedSearchFields.npn);
  }

  /**
   * handle member row selected
   * set selected member to store
   * @param data selected member
   */
  onMemberRowSelected(data: MemberResultJson) {
    // clear previous search fields and type when selection changed
    this.clearPreviousSearchFieldsAndType();
    this.toggleSelection('member', data);
  }

  /**
   * handle member paging changed event
   * @param event paging change event
   */
  onMemberPagingChanged(event: PagingChangeEvent) {
    this.getMembers(event.page, event.size);
  }

  /**
   * handle provider row selected
   * set selected provider to store
   * @param data selected provider data
   */
  onProviderRowSelected(data: ProviderResultJson) {
    // clear previous search fields and type when selection changed
    this.clearPreviousSearchFieldsAndType();
    this.toggleSelection('provider', data);
  }

  /**
   * handle provider paging changed event
   * @param event paging change event
   */
  onProviderPagingChanged(event: PagingChangeEvent) {
    this.getProviders(event.page, event.size);
  }

  /**
   * handle producer row selected
   * set selected producer to store
   * @param data selected producer data
   */
  onProducerRowSelected(data: ProducerResultJson) {
    // clear previous search fields and type when selection changed
    this.clearPreviousSearchFieldsAndType();
    this.toggleSelection('producer', data);
  }

  /**
   * handle group row selected
   * set selected group to store
   * @param data selected group data
   */
  onGroupRowSelected(data: GroupResultJson) {
    // clear previous search fields and type when selection changed
    this.clearPreviousSearchFieldsAndType();
    this.toggleSelection('group', data);
  }

  /**
   * handle producer paging changed event
   * @param event paging change event
   */
  onProducerPagingChanged(event: PagingChangeEvent) {
    this.getProducers(event.page, event.size);
  }

  /**
   * handle member validation
   */
  onMemberValidation() {
    // should set keep selection true to carry selected member
    this.keepSelection = true;
    this.store.dispatch(setValidationType({ validationType: 'member' }));
    this.store.dispatch(setSearchSelectedCaseAbout({ selectedCaseAbout: this.selectedMember }));
    this.store.dispatch(setCaseAboutItemType({ caseAboutItemType: 'member' }));
    this.router.navigate(['/validation/member']);
  }

  /**
   * handle provider case about
   */
  onClickCaseAbout() {
    this.keepSelection = true;
    this.setCaseAboutType();
    this.router.navigate(['/case-about']);
  }

  /**
   * set paging data to store
   * only save when selection is exists
   * if selection is not exists, use previous paging
   */
  private setPagingData() {
    if (this.hasSelection) {
      const { page, size } = this;

      this.store.dispatch(setCaseFromPaging({ page, size }));
    }
  }

  /**
   * return true when selection is exists
   */
  private get hasSelection() {
    return !!(
      this.selectedMember
      || this.selectedProvider
    );
  }

  /**
   * clear all selected rows
   */
  private clearAllSelection() {
    this.store.dispatch(setCaseFromSelectedMember({ selectedMember: null }));
    this.store.dispatch(setCaseFromSelectedProvider({ selectedProvider: null }));
    this.store.dispatch(setCaseFromSelectedProducer({ selectedProducer: null }));
    this.store.dispatch(setCaseFromSelectedGroup({ selectedGroup: null }));
    this.store.dispatch(setCaseFromSelectedPlan({ selectedPlan: null }));
    this.store.dispatch(setCaseFromSelectedOther({ selectedOther: null }));
  }

  /**
   * toggle selection
   * only set data which is matched with type
   * others will be null
   * @param type type
   * @param data data
   */
  private toggleSelection(type: AppSearchResultType, data: any) {
    const actions = {
      member: setCaseFromSelectedMember,
      provider: setCaseFromSelectedProvider,
      producer: setCaseFromSelectedProducer,
      group: setCaseFromSelectedGroup,
      plan: setCaseFromSelectedPlan,
      other: setCaseFromSelectedOther,
    };

    const properties = {
      member: 'selectedMember',
      provider: 'selectedProvider',
      producer: 'selectedProducer',
      group: 'selectedGroup',
      plan: 'selectedPlan',
      other: 'selectedOther',
    };

    Object.keys(actions).forEach(key => {
      if (properties[type]) {
        this.store.dispatch(actions[key]({ [properties[type]]: data }));
      } else {
        this.store.dispatch(actions[key]({ [properties[key]]: null }));
      }
    });
  }

  /**
   * clear data when search type changed
   */
  onSearchTypeChanged() {
    this.clearAllSelection();
    this.data = [];
    this.store.dispatch(setCaseFromProviderType({ providerType: 'contractedProvider' }));
    this.store.dispatch(setCaseFromSearchFields({ fields: {} }));
  }

  /**
   * handle tab clicked
   * @param link clicked link
   */
  onTabClicked(link: string) {
    if (link === '/case-about') {
      // keep selection if case about clicked
      this.keepSelection = true;
      this.setCaseAboutType();
    }
  }

  /**
   * clear previous search fields and type
   */
  clearPreviousSearchFieldsAndType() {
    this.previousSearchType = null;
    this.previousSearchFields = null;
  }

  /**
   * restore previous search fields and type when existing
   */
  private restorePreviousSearchFieldsAndType() {
    if (this.previousSearchFields) {
      this.store.dispatch(setCaseFromSearchFields({ fields: this.previousSearchFields }));
    }

    if (this.previousSearchType) {
      this.store.dispatch(setCaseFromSearchType({ searchType: this.previousSearchType }));
    }
  }

  /**
   * set case about type
   */
  private setCaseAboutType() {
    if (this.selectedOther) {
      this.store.dispatch(setCaseAboutType({ caseAboutType: 'other' }));
      this.store.dispatch(setCaseFromSearchType({ searchType: 'other' }));
    } else {
      const fields = this.previousSearchFields || this.fields;

      if (fields.subGroupId || fields.subGroupName) {
        this.store.dispatch(setCaseFromGroupType({ groupType: 'subGroup' }));
      } else if (fields.groupId || fields.groupName) {
        this.store.dispatch(setCaseFromGroupType({ groupType: 'group' }));
      }

      this.store.dispatch(setCaseAboutType({ caseAboutType: 'default' }));
    }
  }

  /**
   * check fields validation
   */
  checkFieldsValidation() {
    const searchField = this.searchFields;

    if (searchField) {
      return searchField.checkAllValidation();
    }
  }

  /**
   * get search field component
   */
  get searchFields() {
    return this.quickSearchFields
      || this.providerSearchFields
      || this.producerSearchFields
      || this.groupSearchFields
      || this.planToPlanSearchFields
      || this.memberSearchFields;
  }

  /**
   * if all fields are not populated, non contracted provider save button is disabled
   */
  get nonContractedProviderDisabled() {
    return !this.fields.npi
      || !isValidString(this.fields.npi)
      || !this.fields.state
      || !isValidString(this.fields.state);
  }

  /**
   * handle non contracted save clicked
   */
  onNonContractedSaveClick() {
    this.store.dispatch(setCaseFromSelectedProvider({
      selectedProvider: {
        npi: this.fields.npi,
        address: {
          state: this.fields.state,
        },
      } as any,
    }));

    // snackbar will be displayed after non contracted provider initialized
    if (this.nonContractedInitialized) {
      this.matSnackBar.open('Non-Contracted Provider saved');
    }

    this.nonContractedInitialized = true;
  }

  get showSearchControllers() {
    return (
      (this.searchType !== 'provider' || this.providerType !== 'nonContractedProvider')
      && this.searchType !== 'planToPlan'
      && this.searchType !== 'other'
    );
  }

  /**
   * go to producer organization validation
   */
  onClickProducerOrganizationValidation() {
    this.keepSelection = true;
    this.store.dispatch(setCaseFromItemType({ caseFromItemType: 'producerOrganization' }));
    this.store.dispatch(setSearchSelectedCaseFrom({ selectedCaseFrom: this.selectedProducer }));
    this.router.navigate(['/validation/basic']);
  }

  /**
   * handles the sorting
   * @param fieldName the field name of sort
   */
  onSortChange(fieldName) {
    if (this.sortOption.sortBy === fieldName) {
      this.sortOption.sortDirection = this.sortOption.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortOption.sortBy = fieldName;
      this.sortOption.sortDirection = 'asc';
    }
    this.getMembers();
  }
}
