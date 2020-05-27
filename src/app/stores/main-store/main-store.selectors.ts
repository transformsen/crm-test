import {createSelector} from '@ngrx/store';
import {MainStoreKey} from './main-store.actions';
import {MainStore} from './main-store.reducer';
import {isValidString} from '../../utils/validation.util';

export const getMainStore = (state) => state[MainStoreKey];

/**
 * get callerName from main store
 */
export const getCallerName = createSelector(
  getMainStore,
  (state: MainStore) => state.callerName,
);

/**
 * get callbackNumber from main store
 */
export const getCallbackNumber = createSelector(
  getMainStore,
  (state: MainStore) => state.callbackNumber,
);

/**
 * get existence state of caller info
 */
export const getCallerInfoExistence = createSelector(
  getMainStore,
  (state: MainStore) => !!(
    state.callerName
    && state.callbackNumber
    && isValidString(state.callerName)
    && isValidString(state.callbackNumber)
  ),
);
