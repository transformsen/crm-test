import {PagingSearchOptions} from './paging-search-options';

export interface ProducerSearchOptions extends PagingSearchOptions {
  npn?: string;
  firstName?: string;
  lastName?: string;
  producerOrgId?: string;
  producerOrgName?: string;
}
