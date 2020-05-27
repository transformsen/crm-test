import {Action, createReducer, on} from '@ngrx/store';
import {clearMainStore, setCallbackNumber, setCallerName} from './main-store.actions';

export interface MainStore {
  callerName: string;
  callbackNumber: string;
}

/**
 * initial state for main store
 */
export const mainStore: MainStore = {
  callerName: null,
  callbackNumber: null,
};

/**
 * local reducer
 */
const reducer = createReducer(
  mainStore,
  /**
   * set caller name
   */
  on(setCallerName, (state, {callerName}) => ({
    ...state,
    callerName,
  })),
  /**
   * set callback number
   */
  on(setCallbackNumber, (state, {callbackNumber}) => ({
    ...state,
    callbackNumber,
  })),
  /**
   * clear main store
   */
  on(clearMainStore, () => ({
    ...mainStore,
  })),
);

export function mainReducer(state: MainStore, action: Action) {
  return reducer(state, action);
}
