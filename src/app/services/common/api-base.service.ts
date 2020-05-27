import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { PagingSearchOptions } from '../../models/data/paging-search-options';
import * as _ from 'lodash';

const {
  apiHost,
  api,
  defaultPageSize,
} = environment;

@Injectable({
  providedIn: 'root'
})
export class ApiBaseService {
  // host url for the backend
  protected host = apiHost;
  protected backHost = api;

  constructor(
    protected http: HttpClient,
  ) { }

  /**
   * create path with host property
   * @param path path to add
   */
  protected path(path = '') {
    if (path.endsWith('.json')) {
      return this.host + path;
    } else {
      return this.backHost + path;
    }
  }

  /**
   * get page size from options
   * @param options options
   */
  protected getPageSize(options: PagingSearchOptions) {
    let { page, size } = options;

    page = page || 0;
    size = size || defaultPageSize;

    return { page, size };
  }

  /**
   * get paging response
   * @param res responded data
   * @param page page number
   * @param size size number
   * @param sortBy sort By
   * @param sortDirection sort Direction
   */
  protected getPagingResponse<T>(res: T[], page: number, size: number, sortBy?: string, sortDirection?: any) {
    const total = res.length;
    let data = res.splice(page * size, size);
    if (sortBy && sortDirection) {
      data = _.orderBy(data, [sortBy], [sortDirection]);
    }
    return {
      page,
      size,
      total,
      data
    };
  }
}
