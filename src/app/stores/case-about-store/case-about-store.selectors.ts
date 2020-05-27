import {createSelector} from '@ngrx/store';
import {CaseAboutStoreKey} from './case-about-store.actions';
import {CaseAboutStore} from './case-about-store.reducer';

export const getCaseAboutStore = (state) => state[CaseAboutStoreKey];

/**
 * get case about search type
 */
export const getCaseAboutSearchType = createSelector(
  getCaseAboutStore,
  (state: CaseAboutStore) => state.searchType,
);

/**
 * get case about item type
 */
export const getCaseAboutItemType = createSelector(
  getCaseAboutStore,
  (state: CaseAboutStore) => state.caseAboutItemType,
);

/**
 * get case about search fields
 */
export const getCaseAboutSearchFields = createSelector(
  getCaseAboutStore,
  (state: CaseAboutStore) => state.fields,
);

/**
 * get case about selected member
 */
export const getCaseAboutSelectedMember = createSelector(
  getCaseAboutStore,
  (state: CaseAboutStore) => state.selectedMember,
);

/**
 * get case about page
 */
export const getCaseAboutPage = createSelector(
  getCaseAboutStore,
  (state: CaseAboutStore) => state.page,
);

/**
 * get case about size
 */
export const getCaseAboutSize = createSelector(
  getCaseAboutStore,
  (state: CaseAboutStore) => state.size,
);

/**
 * get case about type
 */
export const getCaseAboutType = createSelector(
  getCaseAboutStore,
  (state: CaseAboutStore) => state.type,
);

/**
 * get case about non member id
 */
export const getCaseAboutNonMemberId = createSelector(
  getCaseAboutStore,
  (state: CaseAboutStore) => state.nonMemberId,
);


