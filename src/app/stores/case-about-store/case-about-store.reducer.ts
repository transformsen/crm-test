import {Action, createReducer, on} from '@ngrx/store';
import {
  setCaseAboutItemType,
  setCaseAboutNonMemberId,
  setCaseAboutPaging,
  setCaseAboutSearchFields,
  setCaseAboutSearchType, setCaseAboutSelectedMember, setCaseAboutType,
} from './case-about-store.actions';
import {MemberResultJson} from '../../models/data/member-result';
import {environment} from '../../../environments/environment';

const {
  defaultPageSize,
} = environment;

export type AppCaseAboutType = 'default' | 'other';
export type AppCaseAboutSearchType =
  'member'
  | 'nonMember'
  | 'contractedProvider'
  | 'nonContractedProvider'
  | 'providerPracticeLocation'
  | 'producer'
  | 'group'
  | 'subGroup'
  | 'blueCard'
  | 'prospect'
  | 'other';

export type AppCaseAboutItemType =
  'member'
  | 'nonMember'
  | 'contractedProvider'
  | 'nonContractedProvider'
  | 'providerPracticeLocation'
  | 'producer'
  | 'other'
  | 'subGroup'
  | 'blueCard'
  | 'prospect';

export interface CaseAboutStore {
  type: AppCaseAboutType;
  caseAboutItemType: AppCaseAboutItemType;
  searchType: AppCaseAboutSearchType;
  fields: {[key: string]: string};
  selectedMember: MemberResultJson;
  page: number;
  size: number;
  nonMemberId: string;
}

/**
 * initial state of case from store
 */
export const caseAboutStore: CaseAboutStore = {
  type: null,
  caseAboutItemType: null,
  searchType: 'member',
  fields: {},
  selectedMember: null,
  page: 0,
  size: defaultPageSize,
  nonMemberId: null,
};

const reducer = createReducer(
  caseAboutStore,
  /**
   * set case about search type
   */
  on(setCaseAboutSearchType, (state, {searchType}) => ({
    ...state,
    searchType,
  })),
  /**
   * set case about item type
   */
  on(setCaseAboutItemType, (state, {caseAboutItemType}) => ({
    ...state,
    caseAboutItemType,
  })),
  /**
   * set case about search fields
   */
  on(setCaseAboutSearchFields, (state, {fields}) => ({
    ...state,
    fields,
  })),
  /**
   * set case about selected member
   */
  on(setCaseAboutSelectedMember, (state, {selectedMember}) => ({
    ...state,
    selectedMember,
  })),
  /**
   * set case about paging
   */
  on(setCaseAboutPaging, (state, {page, size}) => ({
    ...state,
    page,
    size,
  })),
  /**
   * set case about type
   */
  on(setCaseAboutType, (state, {caseAboutType}) => ({
    ...state,
    type: caseAboutType,
  })),
  /**
   * set non member id
   */
  on(setCaseAboutNonMemberId, (state, {nonMemberId}) => ({
    ...state,
    nonMemberId,
  })),
);

export function caseAboutReducer(state: CaseAboutStore, action: Action) {
  return reducer(state, action);
}
