import {Action, createReducer, on} from '@ngrx/store';
import {
  setCaseFromGroupType, setCaseFromItemType,
  setCaseFromPaging, setCaseFromProducerType, setCaseFromProviderType,
  setCaseFromSearchFields,
  setCaseFromSearchType, setCaseFromSelectedGroup,
  setCaseFromSelectedMember, setCaseFromSelectedOther, setCaseFromSelectedPlan, setCaseFromSelectedProducer,
  setCaseFromSelectedProvider
} from './case-from-store.actions';
import {MemberResultJson} from '../../models/data/member-result';
import {ProviderResultJson} from '../../models/data/provider-result';
import {environment} from '../../../environments/environment';
import {ProducerResultJson} from '../../models/data/producer-result';
import {GroupResultJson} from '../../models/data/group-result';
import {PlanToPlanJson} from '../../models/data/plan-to-plan';

const {
  defaultPageSize,
} = environment;

export type AppCaseFromSearchType = 'quickSearch' | 'member' | 'provider' | 'producer' | 'group' | 'planToPlan' | 'other';
export type AppCaseFromProviderType = 'contractedProvider' | 'nonContractedProvider' | 'providerPracticeLocation';
export type AppCaseFromProducerType = 'producer' | 'producerOrganization';
export type AppCaseFromGroupType = 'group' | 'subGroup';
export type AppCaseFromItemType =
  'provider'
  | 'nonContractedProvider'
  | 'providerPracticeLocation'
  | 'producer'
  | 'producerOrganization'
  | 'group'
  | 'subGroup'
  | 'planToPlan'
  | 'other';

export interface OtherInfoJson {
  callerName: string;
  callbackNumber: string;
}

export interface CaseFromStore {
  caseFromItemType: AppCaseFromItemType;
  searchType: AppCaseFromSearchType;
  providerType: AppCaseFromProviderType;
  producerType: AppCaseFromProducerType;
  groupType: AppCaseFromGroupType;
  fields: {[key: string]: string};
  selectedMember: MemberResultJson;
  selectedProvider: ProviderResultJson;
  selectedProducer: ProducerResultJson;
  selectedGroup: GroupResultJson;
  selectedPlan: PlanToPlanJson;
  selectedOther: OtherInfoJson;
  page: number;
  size: number;
}

/**
 * initial state of case from store
 */
export const caseFromStore: CaseFromStore = {
  caseFromItemType: null,
  searchType: 'quickSearch',
  providerType: 'contractedProvider',
  producerType: 'producer',
  groupType: 'group',
  fields: {},
  selectedMember: null,
  selectedProvider: null,
  selectedProducer: null,
  selectedGroup: null,
  selectedPlan: null,
  selectedOther: null,
  page: 0,
  size: defaultPageSize,
};

const reducer = createReducer(
  caseFromStore,
  /**
   * set case from search type
   */
  on(setCaseFromSearchType, (state, {searchType}) => ({
    ...state,
    searchType,
  })),
  /**
   * set case from item type
   */
  on(setCaseFromItemType, (state, {caseFromItemType}) => ({
    ...state,
    caseFromItemType,
  })),
  /**
   * set provider type
   */
  on(setCaseFromProviderType, (state, {providerType}) => ({
    ...state,
    providerType,
  })),
  /**
   * set producer type
   */
  on(setCaseFromProducerType, (state, {producerType}) => ({
    ...state,
    producerType,
  })),
  /**
   * set group type
   */
  on(setCaseFromGroupType, (state, {groupType}) => ({
    ...state,
    groupType,
  })),
  /**
   * set case from search fields
   */
  on(setCaseFromSearchFields, (state, {fields}) => ({
    ...state,
    fields,
  })),
  /**
   * set case from selected member
   */
  on(setCaseFromSelectedMember, (state, {selectedMember}) => ({
    ...state,
    selectedMember,
  })),
  /**
   * set case from selected provider
   */
  on(setCaseFromSelectedProvider, (state, {selectedProvider}) => ({
    ...state,
    selectedProvider,
  })),
  /**
   * set case from selected producer
   */
  on(setCaseFromSelectedProducer, (state, {selectedProducer}) => ({
    ...state,
    selectedProducer,
  })),
  /**
   * set case from selected group
   */
  on(setCaseFromSelectedGroup, (state, {selectedGroup}) => ({
    ...state,
    selectedGroup,
  })),
  /**
   * set case from selected plan
   */
  on(setCaseFromSelectedPlan, (state, {selectedPlan}) => ({
    ...state,
    selectedPlan,
  })),
  /**
   * set case from selected other
   */
  on(setCaseFromSelectedOther, (state, {selectedOther}) => ({
    ...state,
    selectedOther,
  })),
  /**
   * set case from paging information
   */
  on(setCaseFromPaging, (state, {page, size}) => ({
    ...state,
    page,
    size,
  })),
);

export function caseFromReducer(state: CaseFromStore, action: Action) {
  return reducer(state, action);
}
