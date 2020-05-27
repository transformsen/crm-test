import {createSelector} from '@ngrx/store';
import {ValidationStoreKey} from './validation-store.actions';
import {ValidationStore} from './validation-store.reducer';

export const getValidationStore = (state) => state[ValidationStoreKey];

/**
 * get validation type
 */
export const getValidationType = createSelector(
  getValidationStore,
  (state: ValidationStore) => state.validationType,
);
