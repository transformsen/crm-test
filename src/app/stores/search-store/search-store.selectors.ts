import {SearchStoreKey} from './search-store.actions';
import {createSelector} from '@ngrx/store';
import {SearchStore} from './search-store.reducer';

export const getSearchStore = (state) => state[SearchStoreKey];

export const getSearchSelectedCaseAbout = createSelector(
  getSearchStore,
  (state: SearchStore) => state.selectedCaseAbout,
);

export const getSearchSelectedCaseFrom = createSelector(
  getSearchStore,
  (state: SearchStore) => state.selectedCaseFrom,
);
