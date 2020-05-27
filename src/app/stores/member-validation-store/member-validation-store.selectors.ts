import {createSelector} from '@ngrx/store';
import {MemberValidationStoreKey} from './member-validation-store.actions';
import {MemberValidationStore} from './member-validation-store.reducer';

export const getMemberValidationStore = (state) => state[MemberValidationStoreKey];

/**
 * get caller from member validation store
 */
export const getMemberValidationCaller = createSelector(
  getMemberValidationStore,
  (state: MemberValidationStore) => state.caller,
);

/**
 * get relationship from member validation store
 */
export const getMemberValidationRelationship = createSelector(
  getMemberValidationStore,
  (state: MemberValidationStore) => state.relationship,
);

/**
 * get previous selection from member validation store
 */
export const getMemberValidationPreviousMember = createSelector(
  getMemberValidationStore,
  (state: MemberValidationStore) => state.previousMember,
);

/**
 * get checked state from member validation store
 */
export const getMemberValidationCheckedState = createSelector(
  getMemberValidationStore,
  (state: MemberValidationStore) => state.checkedState,
);
