import {Action, createReducer, on} from '@ngrx/store';
import {setSearchSelectedCaseAbout, setSearchSelectedCaseFrom} from './search-store.actions';

export interface SearchStore {
  selectedCaseAbout: any;
  selectedCaseFrom: any;
}

export const searchStore: SearchStore = {
  selectedCaseAbout: null,
  selectedCaseFrom: null,
};

const reducer = createReducer(
  searchStore,
  on(setSearchSelectedCaseFrom, (state, {selectedCaseFrom}) => ({
    ...state,
    selectedCaseFrom,
  })),
  on(setSearchSelectedCaseAbout, (state, {selectedCaseAbout}) => ({
    ...state,
    selectedCaseAbout,
  })),
);

export function searchReducer(state, action: Action) {
  return reducer(state, action);
}
