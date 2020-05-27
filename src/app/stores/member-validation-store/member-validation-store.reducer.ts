import {Action, createReducer, on} from '@ngrx/store';
import {
  setMemberValidationCaller, setMemberValidationCheckedState,
  setMemberValidationPreviousMember,
  setMemberValidationRelationship
} from './member-validation-store.actions';
import {MemberResultJson} from '../../models/data/member-result';

export interface CaseAboutCheckedState {
  [key: number]: string[];
}

export interface MemberValidationStore {
  caller: string;
  relationship: string;
  previousMember: MemberResultJson;
  checkedState: CaseAboutCheckedState;
}

/**
 * initial state for member validation
 */
export const memberValidationStore: MemberValidationStore = {
  caller: null,
  relationship: null,
  previousMember: null,
  checkedState: {},
};

/**
 * local reducer
 */
const reducer = createReducer(
  memberValidationStore,
  /**
   * set caller
   */
  on(setMemberValidationCaller, (state, {caller}) => ({
    ...state,
    caller,
  })),
  /**
   * set relationship
   */
  on(setMemberValidationRelationship, (state, {relationship}) => ({
    ...state,
    relationship,
  })),
  /**
   * set previous member selection
   */
  on(setMemberValidationPreviousMember, (state, {previousMember}) => ({
    ...state,
    previousMember,
  })),
  /**
   * set checked state
   */
  on(setMemberValidationCheckedState, (state, {checkedState}) => ({
    ...state,
    checkedState,
  })),
);

export function memberValidationReducer(state: MemberValidationStore, action: Action) {
  return reducer(state, action);
}
