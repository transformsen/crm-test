import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {SubscriptionInventory} from '../../../utils/subscribe.util';
import {combineLatest} from 'rxjs';
import {getSearchSelectedCaseAbout, getSearchSelectedCaseFrom} from '../../../stores/search-store/search-store.selectors';
import {MemberResultJson} from '../../../models/data/member-result';
import {ProviderResultJson} from '../../../models/data/provider-result';
import * as _ from 'lodash';
import {AppCaseFromItemType} from '../../../stores/case-from-store/case-from-store.reducer';
import {AppCaseAboutItemType} from '../../../stores/case-about-store/case-about-store.reducer';
import {getCaseFromItemType} from '../../../stores/case-from-store/case-from-store.selectors';
import {getCaseAboutItemType} from '../../../stores/case-about-store/case-about-store.selectors';

@Component({
  selector: 'app-basic-validation',
  templateUrl: './basic-validation.component.html',
  styleUrls: ['./basic-validation.component.scss']
})
export class BasicValidationComponent implements OnInit, OnDestroy {
  // case from
  caseFrom: ProviderResultJson;
  // case about
  caseAbout: MemberResultJson;
  // case from type
  caseFromType: AppCaseFromItemType;
  // case about type
  caseAboutType: AppCaseAboutItemType;
  // subscription inventory
  private inventory: SubscriptionInventory = new SubscriptionInventory();
  // subscription keys for inventory
  private subKeys = {
    caseFromAndAbout: 'caseFromAndAbout',
    caseFromAndAboutTypes: 'caseFromAndAboutTypes',
  };

  constructor(
    private store: Store,
  ) {
  }

  ngOnInit(): void {
    this.getSelectedCaseFromAndAbout();
    this.getCaseFromAndAboutTypes();
  }

  ngOnDestroy(): void {
    this.inventory.unSubscribeAll();
  }

  /**
   * get selected case about and case from from search store
   */
  private getSelectedCaseFromAndAbout() {
    this.inventory.unSubscribe(this.subKeys.caseFromAndAbout);

    const sub = combineLatest([
      this.store.select(getSearchSelectedCaseFrom),
      this.store.select(getSearchSelectedCaseAbout),
    ]).subscribe({
      next: res => {
        this.caseFrom = _.cloneDeep(res[0]);
        this.caseAbout = _.cloneDeep(res[1]);
      },
    });

    this.inventory.store(this.subKeys.caseFromAndAbout, sub);
  }

  /**
   * get case from and about types
   */
  private getCaseFromAndAboutTypes() {
    this.inventory.unSubscribe(this.subKeys.caseFromAndAboutTypes);

    const sub = combineLatest([
      this.store.select(getCaseFromItemType),
      this.store.select(getCaseAboutItemType),
    ]).subscribe({
      next: res => {
        this.caseFromType = _.cloneDeep(res[0]);
        this.caseAboutType = _.cloneDeep(res[1]);
      },
    });

    this.inventory.store(this.subKeys.caseFromAndAboutTypes, sub);
  }

  /**
   * show member validation
   */
  get memberValidation() {
    return (
      (
        this.caseAboutType === 'member'
        || this.caseAboutType === 'nonMember'
        || (
          this.caseFromType === 'other'
          && (
            this.caseAboutType === 'blueCard'
            || this.caseAboutType === 'prospect'
            || this.caseAboutType === 'other'
          )
        )
      )
      && !this.providerValidation
    );
  }

  /**
   * show provider validation
   */
  get providerValidation() {
    return (
      (
        this.caseFromType === 'provider'
        && this.caseAboutType === 'contractedProvider'
      )
      || (
        this.caseFromType === 'nonContractedProvider'
        && this.caseAboutType === 'nonContractedProvider'
      )
      && !this.singleAboutValidation
    );
  }

  /**
   * show single about validation
   */
  get singleAboutValidation() {
    return (
      this.providerPracticeLocationValidation
      || this.producerValidation
      || this.subGroupValidation
    );
  }

  /**
   * show provider practice location validation
   */
  get providerPracticeLocationValidation() {
    return (
      this.caseFromType === 'providerPracticeLocation'
      && this.caseAboutType === 'providerPracticeLocation'
    );
  }

  /**
   * show producer validation
   */
  get producerValidation() {
    return (
      this.caseFromType === 'producer'
      && this.caseAboutType === 'producer'
    );
  }

  /**
   * show single case from validation
   */
  get singleFromValidation() {
    return (
      this.producerOrganizationValidation
      || this.groupValidation
    );
  }

  /**
   * show producer organization validation
   */
  get producerOrganizationValidation() {
    return (
      this.caseFromType === 'producerOrganization'
    );
  }

  /**
   * show group validation
   */
  get groupValidation() {
    return (
      this.caseFromType === 'group'
      && !this.subGroupValidation
    );
  }

  /**
   * show subgroup validation
   */
  get subGroupValidation() {
    return (
      this.caseAboutType === 'subGroup'
    );
  }
}
