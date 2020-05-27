import {PagingSearchOptions} from './paging-search-options';

export interface ProviderSearchOptions extends PagingSearchOptions {
  npi?: string;
  firstName?: string;
  lastName?: string;
  taxId?: string;
  practiceLocation?: string;
}
