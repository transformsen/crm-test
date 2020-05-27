import {createSelector} from '@ngrx/store';
import {CaseFromStoreKey} from './case-from-store.actions';
import {CaseFromStore} from './case-from-store.reducer';

export const getCaseFromStore = (state) => state[CaseFromStoreKey];

/**
 * get case from search type
 */
export const getCaseFromSearchType = createSelector(
  getCaseFromStore,
  (state: CaseFromStore) => state.searchType,
);

/**
 * get case from item type
 */
export const getCaseFromItemType = createSelector(
  getCaseFromStore,
  (state: CaseFromStore) => state.caseFromItemType,
);

/**
 * get case from provider type
 */
export const getCaseFromProviderType = createSelector(
  getCaseFromStore,
  (state: CaseFromStore) => state.providerType,
);

/**
 * get case from producer type
 */
export const getCaseFromProducerType = createSelector(
  getCaseFromStore,
  (state: CaseFromStore) => state.producerType,
);

/**
 * get case from group type
 */
export const getCaseFromGroupType = createSelector(
  getCaseFromStore,
  (state: CaseFromStore) => state.groupType,
);

/**
 * get case from search fields
 */
export const getCaseFromSearchFields = createSelector(
  getCaseFromStore,
  (state: CaseFromStore) => state.fields,
);

/**
 * get case from selected member
 */
export const getCaseFromSelectedMember = createSelector(
  getCaseFromStore,
  (state: CaseFromStore) => state.selectedMember,
);

/**
 * get case from selected provider
 */
export const getCaseFromSelectedProvider = createSelector(
  getCaseFromStore,
  (state: CaseFromStore) => state.selectedProvider,
);

/**
 * get case from selected producer
 */
export const getCaseFromSelectedProducer = createSelector(
  getCaseFromStore,
  (state: CaseFromStore) => state.selectedProducer,
);

/**
 * get case from selected group
 */
export const getCaseFromSelectedGroup = createSelector(
  getCaseFromStore,
  (state: CaseFromStore) => state.selectedGroup,
);

/**
 * get case from selected plan
 */
export const getCaseFromSelectedPlan = createSelector(
  getCaseFromStore,
  (state: CaseFromStore) => state.selectedPlan,
);

/**
 * get case from selected other
 */
export const getCaseFromSelectedOther = createSelector(
  getCaseFromStore,
  (state: CaseFromStore) => state.selectedOther,
);

/**
 * get case from page
 */
export const getCaseFromPage = createSelector(
  getCaseFromStore,
  (state: CaseFromStore) => state.page,
);

/**
 * get case from size
 */
export const getCaseFromSize = createSelector(
  getCaseFromStore,
  (state: CaseFromStore) => state.size,
);
