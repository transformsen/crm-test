import {createAction, props} from '@ngrx/store';

export const MainStoreKey = 'MainStore';

/**
 * set caller name to main store
 */
export const setCallerName = createAction(
  `${MainStoreKey}:setCallerName`,
  props<{ callerName: string }>(),
);

/**
 * set callback number to main store
 */
export const setCallbackNumber = createAction(
  `${MainStoreKey}:setCallbackNumber`,
  props<{ callbackNumber: string }>(),
);

/**
 * clear main store
 */
export const clearMainStore = createAction(
  `${MainStoreKey}:clearMainStore`,
  props<{}>(),
);
