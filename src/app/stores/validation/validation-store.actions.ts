import {createAction, props} from '@ngrx/store';
import {ValidationType} from './validation-store.reducer';

export const ValidationStoreKey = 'ValidationStore';

/**
 * set validation type
 */
export const setValidationType = createAction(
  `${ValidationStoreKey}:setValidationType`,
  props<{ validationType: ValidationType }>(),
);
