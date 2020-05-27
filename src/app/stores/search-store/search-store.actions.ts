import {createAction, props} from '@ngrx/store';

export const SearchStoreKey = 'SearchStore';

export const setSearchSelectedCaseAbout = createAction(
  `${SearchStoreKey}:setSearchSelectedCaseAbout`,
  props<{selectedCaseAbout: any}>(),
);

export const setSearchSelectedCaseFrom = createAction(
  `${SearchStoreKey}:setSearchSelectedCaseFrom`,
  props<{selectedCaseFrom: any}>(),
);
