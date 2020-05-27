import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {OptionItem} from '../../models/component/option-item';
import {Store} from '@ngrx/store';
import {SubscriptionInventory} from '../../utils/subscribe.util';
import {
  getCaseAboutNonMemberId,
  getCaseAboutPage,
  getCaseAboutSearchFields,
  getCaseAboutSearchType,
  getCaseAboutSelectedMember, getCaseAboutSize, getCaseAboutType
} from '../../stores/case-about-store/case-about-store.selectors';
import {
  setCaseAboutItemType,
  setCaseAboutNonMemberId,
  setCaseAboutPaging, setCaseAboutSearchFields,
  setCaseAboutSearchType,
  setCaseAboutSelectedMember
} from '../../stores/case-about-store/case-about-store.actions';
import * as _ from 'lodash';
import {AppCaseAboutItemType, AppCaseAboutSearchType, AppCaseAboutType} from '../../stores/case-about-store/case-about-store.reducer';
import {DataService} from '../../services/data.service';
import {SearchBaseComponent} from '../common/search-base.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import {PagingChangeEvent} from '../../components/common/paginator/common/paginator-common.component';
import {MemberResultJson} from '../../models/data/member-result';
import {isValidString} from '../../utils/validation.util';
import {combineLatest} from 'rxjs';
import {Router} from '@angular/router';
import {setSearchSelectedCaseAbout, setSearchSelectedCaseFrom} from '../../stores/search-store/search-store.actions';
import {ProviderResultJson} from '../../models/data/provider-result';
import {
  getCaseFromGroupType,
  getCaseFromProducerType,
  getCaseFromProviderType, getCaseFromSelectedGroup, getCaseFromSelectedOther, getCaseFromSelectedPlan,
  getCaseFromSelectedProducer,
  getCaseFromSelectedProvider
} from '../../stores/case-from-store/case-from-store.selectors';
import {MemberSearchFieldsComponent} from '../../components/case-about/member-search-fields/member-search-fields.component';
import {
  AppCaseFromGroupType, AppCaseFromItemType,
  AppCaseFromProducerType,
  AppCaseFromProviderType,
  OtherInfoJson
} from '../../stores/case-from-store/case-from-store.reducer';
import {ProducerResultJson} from '../../models/data/producer-result';
import {GroupResultJson} from '../../models/data/group-result';
import {PlanToPlanJson} from '../../models/data/plan-to-plan';
import {setCaseFromItemType} from '../../stores/case-from-store/case-from-store.actions';
import {BlueCardInputFieldsComponent} from '../../components/case-about/blue-card-input-fields/blue-card-input-fields.component';
import {ProspectInputFieldsComponent} from '../../components/case-about/prospect-input-fields/prospect-input-fields.component';
import {OtherInputFieldsComponent} from '../../components/case-about/other-input-fields/other-input-fields.component';

@Component({
  selector: 'app-case-about',
  templateUrl: './case-about.component.html',
  styleUrls: ['./case-about.component.scss']
})
export class CaseAboutComponent extends SearchBaseComponent implements OnInit, OnDestroy {
  // member search fields
  @ViewChild(MemberSearchFieldsComponent) memberSearchFields: MemberSearchFieldsComponent;
  // blue card input fields
  @ViewChild(BlueCardInputFieldsComponent) blueCardInputFields: BlueCardInputFieldsComponent;
  // prospect input fields
  @ViewChild(ProspectInputFieldsComponent) prospectInputFields: ProspectInputFieldsComponent;
  // other input fields
  @ViewChild(OtherInputFieldsComponent) otherInputFields: OtherInputFieldsComponent;

  // case about type
  type: AppCaseAboutType;
  // case about search type
  searchType: AppCaseAboutSearchType = 'member';
  // provider type
  providerType: AppCaseFromProviderType = 'contractedProvider';
  // producer type
  producerType: AppCaseFromProducerType = 'producer';
  // group type
  groupType: AppCaseFromGroupType = 'group';
  // case about options
  options: OptionItem<AppCaseAboutSearchType>[] = [];
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
  // non member id
  nonMemberId: string;
  // subscription inventory
  private inventory: SubscriptionInventory = new SubscriptionInventory();
  // subscription keys for inventory
  private subKeys = {
    type: 'type',
    searchType: 'searchType',
    searchFields: 'searchFields',
    getMembers: 'getMembers',
    selectedMember: 'selectedMember',
    selectedProvider: 'selectedProvider',
    selectedProducer: 'selectedProducer',
    selectedGroup: 'selectedGroup',
    selectedPlan: 'selectedPlan',
    selectedOther: 'selectedOther',
    providerType: 'providerType',
    producerType: 'producerType',
    groupType: 'groupType',
    getPaging: 'getPaging',
    nonMemberId: 'nonMemberId',
  };
  // initialized state
  private initialized = false;
  // keep selection state for searching
  // set true to keep previous selection
  private keepSelection = false;

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

    this.getCaseAboutType();
    this.getSearchType();
    this.getSearchFields();
    // member
    this.getSelectedMember();
    // provider
    this.getSelectedProvider();
    this.getProviderType();
    // producer
    this.getSelectedProducer();
    this.getProducerType();
    // group
    this.getSelectedGroup();
    this.getGroupType();
    // plan
    this.getSelectedPlan();
    // other
    this.getSelectedOther();
    this.getNonMemberId();

    setTimeout(() => {
      this.populateOptions();
    });
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();

    this.inventory.unSubscribeAll();

    this.setPagingData();
  }

  /**
   * populate options
   */
  private populateOptions() {
    this.searchType = 'member';
    this.options = [
      new OptionItem<AppCaseAboutSearchType>('Member', 'member'),
      new OptionItem<AppCaseAboutSearchType>('Non-Member', 'nonMember'),
    ];

    if (this.selectedProvider) {
      if (this.providerType === 'contractedProvider') {
        // case from provider
        this.options.push(new OptionItem<AppCaseAboutSearchType>('Contracted Provider', 'contractedProvider'));
      } else if (this.providerType === 'nonContractedProvider') {
        // case from non contracted provider
        this.options.push(new OptionItem<AppCaseAboutSearchType>('Non-Contracted Provider', 'nonContractedProvider'));
      } else if (this.providerType === 'providerPracticeLocation') {
        // case from provider practice location
        this.options.push(new OptionItem<AppCaseAboutSearchType>('Provider Practice Location', 'providerPracticeLocation'));
        this.searchType = 'providerPracticeLocation';
      }
    } else if (this.selectedProducer) {
      if (this.producerType === 'producer') {
        this.options.push(new OptionItem<AppCaseAboutSearchType>('Producer', 'producer'));
        this.searchType = 'producer';
      }
    } else if (this.selectedGroup) {
      if (this.groupType === 'group') {
        this.options.push(new OptionItem<AppCaseAboutSearchType>('Group', 'group'));
        this.searchType = 'group';
      } else {
        this.options.push(new OptionItem<AppCaseAboutSearchType>('Subgroup', 'subGroup'));
        this.searchType = 'subGroup';
      }
    } else if (this.selectedOther) {
      this.searchType = null;
      this.options = [
        new OptionItem<AppCaseAboutSearchType>('BlueCard', 'blueCard'),
        new OptionItem<AppCaseAboutSearchType>('Prospect', 'prospect'),
        new OptionItem<AppCaseAboutSearchType>('Other', 'other'),
      ];
    }

    this.store.dispatch(setCaseAboutSearchType({searchType: this.searchType}));
  }

  /**
   * get case about type from store
   */
  private getCaseAboutType() {
    this.inventory.unSubscribe(this.subKeys.type);

    const sub = this.store
      .select(getCaseAboutType)
      .subscribe({
        next: res => {
          this.type = res;
        },
      });

    this.inventory.store(this.subKeys.type, sub);
  }

  /**
   * get search type from store
   */
  private getSearchType() {
    this.inventory.unSubscribe(this.subKeys.searchType);

    const sub = this.store
      .select(getCaseAboutSearchType)
      .subscribe({
        next: res => {
          this.searchType = res;
        },
      });

    this.inventory.store(this.subKeys.searchType, sub);
  }

  /**
   * get search fields from store
   */
  private getSearchFields() {
    this.inventory.unSubscribe(this.subKeys.searchFields);

    const sub = this.store
      .select(getCaseAboutSearchFields)
      .subscribe({
        next: res => {
          this.fields = _.cloneDeep(res);
          this.checkFieldsToTriggerSearch();
        },
      });

    this.inventory.store(this.subKeys.searchFields, sub);
  }

  /**
   * check fields to trigger search
   * at least on property has value, get paging data and trigger search
   */
  private checkFieldsToTriggerSearch() {
    if (this.fields && !this.initialized) {
      if (Object.keys(this.fields).some(key => isValidString(this.fields[key]))) {
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

    const sub = combineLatest([
      this.store.select(getCaseAboutPage),
      this.store.select(getCaseAboutSize),
    ]).subscribe({
      next: res => {
        this.page = res[0];
        this.size = res[1];
        this.onSearchClicked(this.page, this.size);
      },
    });

    // store subscription
    this.inventory.store(this.subKeys.getPaging, sub);
  }

  /**
   * get selected member from case about store
   */
  private getSelectedMember() {
    this.inventory.unSubscribe(this.subKeys.selectedMember);

    const sub = this.store
      .select(getCaseAboutSelectedMember)
      .subscribe({
        next: res => {
          this.selectedMember = _.cloneDeep(res);
        },
      });

    this.inventory.store(this.subKeys.selectedMember, sub);
  }

  /**
   * get selected provider from case from store
   */
  private getSelectedProvider() {
    this.inventory.unSubscribe(this.subKeys.selectedProvider);

    const sub = this.store
      .select(getCaseFromSelectedProvider)
      .subscribe({
        next: res => {
          this.selectedProvider = _.cloneDeep(res);
        },
      });

    this.inventory.store(this.subKeys.selectedProvider, sub);
  }

  /**
   * get selected producer from case from store
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
   * get selected group from case from store
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
   * get selected plan from case from store
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
   * get selected other from case from store
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
   * get case from provider type
   */
  private getProviderType() {
    this.inventory.unSubscribe(this.subKeys.providerType);

    const sub = this.store
      .select(getCaseFromProviderType)
      .subscribe({
        next: res => {
          this.providerType = res;
        },
      });

    this.inventory.store(this.subKeys.providerType, sub);
  }

  /**
   * get case from producer type
   */
  private getProducerType() {
    this.inventory.unSubscribe(this.subKeys.producerType);

    const sub = this.store
      .select(getCaseFromProducerType)
      .subscribe({
        next: res => {
          this.producerType = res;
        },
      });

    this.inventory.store(this.subKeys.producerType, sub);
  }

  /**
   * get case from group type
   */
  private getGroupType() {
    this.inventory.unSubscribe(this.subKeys.groupType);

    const sub = this.store
      .select(getCaseFromGroupType)
      .subscribe({
        next: res => {
          this.groupType = res;
        },
      });

    this.inventory.store(this.subKeys.groupType, sub);
  }

  /**
   * get non member id from store
   */
  private getNonMemberId() {
    this.inventory.unSubscribe(this.subKeys.nonMemberId);

    const sub = this.store
      .select(getCaseAboutNonMemberId)
      .subscribe({
        next: res => {
          this.nonMemberId = _.cloneDeep(res);
        },
      });

    this.inventory.store(this.subKeys.nonMemberId, sub);
  }

  /**
   * set changed value to case about
   * @param value changed case about value
   */
  onCaseAboutChange(value: AppCaseAboutSearchType) {
    // clear data
    this.onClearClicked();
    this.store.dispatch(setCaseAboutNonMemberId({nonMemberId: null}));
    this.store.dispatch(setCaseAboutSelectedMember({selectedMember: null}));

    // set value
    this.store.dispatch(setCaseAboutSearchType({searchType: value}));
  }

  /**
   * handle search clicked
   * @param page page
   * @param size size
   * @param validate whether validate fields or not
   */
  onSearchClicked(page = 0, size = this.size, validate = false) {
    if (!this.searchDisabled) {
      // validate search fields
      if (validate) {
        if (!this.validateMemberSearchFields()) {
          return;
        }
      }

      this.preserveSearchFields();

      switch (this.searchType) {
        case 'member': {
          this.getMembers(page, size);
          break;
        }

        case 'nonMember': {
          break;
        }
      }

      this.keepSelection = false;
    } else {
      this.matSnackBar.open('Enter at least 1 search criteria.');
    }
  }

  /**
   * clear all fields
   */
  onClearClicked() {
    // clear local values
    this.data = [];
    this.page = 0;
    this.total = 0;
    this.store.dispatch(setCaseAboutSearchFields({fields: {}}));
  }

  /**
   * validate member search fields and return true when all fields are valid
   */
  private validateMemberSearchFields() {
    if (this.memberSearchFields) {
      return this.memberSearchFields.checkAllValidation();
    }
  }

  /**
   * get members
   */
  private getMembers(page = this.page, size = this.size) {
    this.inventory.unSubscribe(this.subKeys.getMembers);

    if (this.selectedMember && !this.keepSelection) {
      this.store.dispatch(setCaseAboutSelectedMember({selectedMember: null}));
    }

    const sub = this.dataService
      .getMembers({
        ...this.preservedSearchFields,
        page,
        size,
      }, this.fields)
      .subscribe({
        next: res => {
          this.setRespondedData(res);
        },
      });

    this.inventory.store(this.subKeys.getMembers, sub);
  }

  /**
   * handle member paging changed
   * @param event changed paging
   */
  onMemberPagingChanged(event: PagingChangeEvent) {
    this.getMembers(event.page, event.size);
  }

  /**
   * handle member row selected
   * @param data selected member
   */
  onMemberRowSelected(data: MemberResultJson) {
    this.store.dispatch(setCaseAboutSelectedMember({selectedMember: data}));
  }

  /**
   * on click validation button of member
   */
  onMemberValidation() {
    // go to basic validation page
    this.store.dispatch(setSearchSelectedCaseAbout({selectedCaseAbout: this.selectedMember}));
    this.store.dispatch(setSearchSelectedCaseFrom({selectedCaseFrom: this.selectedProvider}));
    this.router.navigate(['/validation/basic']);
  }

  /**
   * set paging data to store
   * only save when selection is exists
   * if selection is not exists, use previous paging
   */
  private setPagingData() {
    if (this.hasSelection) {
      const {page, size} = this;

      this.store.dispatch(setCaseAboutPaging({page, size}));
    }
  }

  /**
   * return true when selection is exists
   */
  private get hasSelection() {
    return !!(
      this.selectedMember
    );
  }

  /**
   * set non member id to store
   * @param value changed non member id
   */
  onNonMemberIdChange(value: string) {
    this.store.dispatch(setCaseAboutNonMemberId({nonMemberId: value}));
  }

  /**
   * return true when non member id is exists
   */
  get hasNonMemberId() {
    return isValidString(this.nonMemberId);
  }

  /**
   * handle validation clicked
   */
  onValidationClicked() {
    this.setCaseFrom();

    if (this.searchType === 'nonMember') {
      this.setCaseAboutTypeAndItem('nonMember', {nonMemberId: this.nonMemberId});
    } else if (this.searchType === 'contractedProvider') {
      this.setCaseAboutTypeAndItem('contractedProvider', this.selectedProvider);
    } else if (this.searchType === 'nonContractedProvider') {
      this.setCaseAboutTypeAndItem('nonContractedProvider', this.selectedProvider);
    } else if (this.searchType === 'providerPracticeLocation') {
      this.setCaseAboutTypeAndItem('providerPracticeLocation', this.selectedProvider);
    } else if (this.searchType === 'producer') {
      this.setCaseAboutTypeAndItem('producer', this.selectedProducer);
    } else if (this.searchType === 'subGroup') {
      this.setCaseAboutTypeAndItem('subGroup', this.selectedGroup);
    } else if (this.selectedMember) {
      if (this.searchType === 'member') {
        this.setCaseAboutTypeAndItem('member', this.selectedMember);
      }
    }

    this.router.navigate(['/validation/basic']);
  }

  private setCaseFrom() {
    if (this.selectedProvider) {
      switch (this.providerType) {
        case 'contractedProvider': {
          this.setCaseFromTypeAndItem('provider', this.selectedProvider);
          break;
        }

        case 'nonContractedProvider': {
          this.setCaseFromTypeAndItem('nonContractedProvider', this.selectedProvider);
          break;
        }

        case 'providerPracticeLocation': {
          this.setCaseFromTypeAndItem('providerPracticeLocation', this.selectedProvider);
          break;
        }
      }
    } else if (this.selectedProducer) {
      switch (this.producerType) {
        case 'producer': {
          this.setCaseFromTypeAndItem('producer', this.selectedProducer);
          break;
        }

        case 'producerOrganization': {
          this.setCaseFromTypeAndItem('producerOrganization', this.selectedProducer);
          break;
        }
      }
    } else if (this.selectedGroup) {
      switch (this.groupType) {
        case 'group': {
          this.setCaseFromTypeAndItem('group', this.selectedGroup);
          break;
        }

        case 'subGroup': {
          this.setCaseFromTypeAndItem('subGroup', this.selectedGroup);
          break;
        }
      }
    } else if (this.selectedPlan) {
      this.setCaseFromTypeAndItem('planToPlan', this.selectedPlan);
    }
  }

  private setCaseFromTypeAndItem(type: AppCaseFromItemType, item: any) {
    this.store.dispatch(setCaseFromItemType({caseFromItemType: type}));
    this.store.dispatch(setSearchSelectedCaseFrom({selectedCaseFrom: item}));
  }

  private setCaseAboutTypeAndItem(type: AppCaseAboutItemType, item: any) {
    this.store.dispatch(setCaseAboutItemType({caseAboutItemType: type}));
    this.store.dispatch(setSearchSelectedCaseAbout({selectedCaseAbout: item}));
  }

  /**
   * handle enter event from other type
   */
  onEnteredOther() {
    if (this.validateOtherField()) {
      this.setCaseFromTypeAndItem('other', this.selectedOther);

      if (this.searchType === 'blueCard') {
        this.setCaseAboutTypeAndItem('blueCard', { ...this.fields });
      } else if (this.searchType === 'prospect') {
        this.setCaseAboutTypeAndItem('prospect', { ...this.fields });
      } else if (this.searchType === 'other') {
        this.setCaseAboutTypeAndItem('other', { ...this.fields });
      }

      this.router.navigate(['/validation/basic']);
    }
  }

  /**
   * validate other input fields
   */
  validateOtherField() {
    const fields = this.otherFields;

    if (fields) {
      return fields.checkAllValidation();
    }
  }

  /**
   * get other fields
   */
  get otherFields() {
    return this.blueCardInputFields
      || this.prospectInputFields
      || this.otherInputFields;
  }
}
