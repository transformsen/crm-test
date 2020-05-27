import {createAction, props} from '@ngrx/store';
import {AppCaseAboutItemType, AppCaseAboutSearchType, AppCaseAboutType} from './case-about-store.reducer';
import {MemberResultJson} from '../../models/data/member-result';

export const CaseAboutStoreKey = 'CaseAboutStore';

/**
 * set case about search type
 */
export const setCaseAboutSearchType = createAction(
  `${CaseAboutStoreKey}:setCaseAboutSearchType`,
  props<{ searchType: AppCaseAboutSearchType }>(),
);

/**
 * set case about search fields
 */
export const setCaseAboutSearchFields = createAction(
  `${CaseAboutStoreKey}:setCaseAboutSearchFields`,
  props<{ fields: {[key: string]: string} }>(),
);

/**
 * set case about selected member
 */
export const setCaseAboutSelectedMember = createAction(
  `${CaseAboutStoreKey}:setCaseAboutSelectedMember`,
  props<{ selectedMember: MemberResultJson }>(),
);

/**
 * set case about paging
 */
export const setCaseAboutPaging = createAction(
  `${CaseAboutStoreKey}:setCaseAboutPaging`,
  props<{ page: number, size: number }>(),
);

/**
 * set case about type
 */
export const setCaseAboutType = createAction(
  `${CaseAboutStoreKey}:setCaseAboutType`,
  props<{ caseAboutType: AppCaseAboutType }>(),
);

/**
 * set case about non member id
 */
export const setCaseAboutNonMemberId = createAction(
  `${CaseAboutStoreKey}:setCaseAboutNonMemberId`,
  props<{ nonMemberId: string }>(),
);

/**
 * set case about item type
 */
export const setCaseAboutItemType = createAction(
  `${CaseAboutStoreKey}:setCaseAboutItemType`,
  props<{ caseAboutItemType: AppCaseAboutItemType }>(),
);
