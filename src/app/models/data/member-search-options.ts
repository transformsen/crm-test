import { PagingSearchOptions } from './paging-search-options';
import { SortOption } from './sort-option';

export interface MemberSearchOptions extends PagingSearchOptions, SortOption {
  callerName?: string;
  callbackNumber?: string;
  policyId?: string;
}
