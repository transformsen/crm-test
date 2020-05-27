import {Action, createReducer, on} from '@ngrx/store';
import {setValidationType} from './validation-store.actions';
import {MemberResultJson} from '../../models/data/member-result';

export type ValidationType = 'member' | 'basic';

export interface ValidationStore {
  validationType: ValidationType;
  selectedMembers: MemberResultJson[];
}

/**
 * initial state for validation
 */
export const ValidationStore: ValidationStore = {
  validationType: null,
  selectedMembers: [],
};

/**
 * local reducer
 */
const reducer = createReducer(
  ValidationStore,
  /**
   * set validation type
   */
  on(setValidationType, (state, {validationType}) => ({
    ...state,
    validationType,
  })),
);

export function validationReducer(state: ValidationStore, action: Action) {
  return reducer(state, action);
}
