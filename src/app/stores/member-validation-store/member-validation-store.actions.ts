import {createAction, props} from '@ngrx/store';
import {MemberResultJson} from '../../models/data/member-result';
import {CaseAboutCheckedState} from './member-validation-store.reducer';

export const MemberValidationStoreKey = 'MemberValidationStore';

/**
 * set caller
 */
export const setMemberValidationCaller = createAction(
  `${MemberValidationStoreKey}:setMemberValidationCaller`,
  props<{ caller: string }>(),
);

/**
 * set relationship
 */
export const setMemberValidationRelationship = createAction(
  `${MemberValidationStoreKey}:setMemberValidationRelationship`,
  props<{ relationship: string }>(),
);

/**
 * set previous member selection
 */
export const setMemberValidationPreviousMember = createAction(
  `${MemberValidationStoreKey}:setMemberValidationPreviousMember`,
  props<{previousMember: MemberResultJson}>(),
);

/**
 * set checked state
 */
export const setMemberValidationCheckedState = createAction(
  `${MemberValidationStoreKey}:setMemberValidationCheckedState`,
  props<{ checkedState: CaseAboutCheckedState }>(),
);
