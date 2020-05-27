import {PagingSearchOptions} from './paging-search-options';

export interface GroupSearchOptions extends PagingSearchOptions {
  groupId?: string;
  groupName?: string;
  subGroupId?: string;
  subGroupName?: string;
}
