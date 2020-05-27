import { Injectable } from '@angular/core';
import { ApiBaseService } from './common/api-base.service';
import { HttpClient } from '@angular/common/http';
import { MemberSearchOptions } from '../models/data/member-search-options';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PagingJson } from '../models/data/paging';
import { MemberResultJson } from '../models/data/member-result';
import { ProviderSearchOptions } from '../models/data/provider-search-options';
import { ProviderResultJson } from '../models/data/provider-result';
import { ProducerSearchOptions } from '../models/data/producer-search-options';
import { ProducerResultJson } from '../models/data/producer-result';
import { sortMethodWithOrderMultiColumn } from '../utils/sort.util';
import { GroupSearchOptions } from '../models/data/group-search-options';
import { GroupResultJson } from '../models/data/group-result';
import { IBackendResponse } from '../models/data/backend-response';

@Injectable({
  providedIn: 'root'
})
export class DataService extends ApiBaseService {
  constructor(
    protected http: HttpClient,
  ) {
    super(
      http,
    );

    this.host += '/data';
  }

  /**
   * get members
   * @param options member search options
   * @param params search params
   */
  getMembers(options: MemberSearchOptions = {}, params: { [param: string]: string | string[] }): Observable<PagingJson<MemberResultJson>> {
    const { page, size } = this.getPageSize(options);

    this.cleanParam(params);

    return this.http
      .get<IBackendResponse<MemberResultJson>>(this.path('/validation/members/search'), {params})
      .pipe(map(res => {
        this.setIds(res.results);
        res.results.forEach((value => {
          value.firstName = value.members[0].firstName;
          value.lastName = value.members[0].lastName;
          value.relationship = value.members[0].relationship;
        }));
        return this.getPagingResponse(res.results, page, size, options.sortBy, options.sortDirection);
      }));
  }

  /**
   * get providers
   * @param options provider search options
   * @param params search parameter
   */
  getProviders(options: ProviderSearchOptions = {},
               params: { [param: string]: string | string[] }): Observable<PagingJson<ProviderResultJson>> {
    const { page, size } = this.getPageSize(options);

    this.cleanParam(params);

    return this.http
      .get<IBackendResponse<ProviderResultJson>>(this.path('/validation/providers/search'), {params})
      .pipe(map(res => {
        res.results.forEach((value => {
          value.name = value.firstName + ' ' + value.lastName;
        }));

        this.setIds(res.results);
        return this.getPagingResponse(res.results, page, size);
      }));
  }

  /**
   * get producers
   * @param options options for producers
   * @param params search parameter
   */
  getProducers(options: ProducerSearchOptions = {},
               params: { [param: string]: string | string[] }): Observable<PagingJson<ProducerResultJson>> {
    const { page, size } = this.getPageSize(options);

    this.cleanParam(params);

    return this.http
      .get<IBackendResponse<ProducerResultJson>>(this.path('/validation/producers/search'), {params})
      .pipe(map(res => {
        this.setIds(res.results);
        return this.getPagingResponse(res.results, page, size);
      }));
  }

  /**
   * get advanced providers
   * @param options options
   * @param params search parameter
   */
  getAdvancedProviders(options: ProviderSearchOptions = {}, params: { [param: string]: string | string[] }) {
    const { page, size } = this.getPageSize(options);

    this.cleanParam(params);

    return this.http
      .get<IBackendResponse<ProviderResultJson>>(this.path('/validation/providers/search'), {params})
      .pipe(map(res => {
        res.results.forEach((value => {
          value.name = value.firstName + ' ' + value.lastName;
        }));

        res.results = res.results.sort(sortMethodWithOrderMultiColumn([
          { property: 'lastName', order: 'asc' },
          { property: 'firstName', order: 'asc' },
          { property: 'status', order: 'asc' },
          { property: 'state', order: 'asc' },
          { property: 'city', order: 'asc' },
          { property: 'addressLine1', order: 'asc' },
          { property: 'npi', order: 'asc' },
          { property: 'taxId', order: 'asc' },
        ]));

        this.setIds(res.results);

        return this.getPagingResponse(res.results, page, size);
      }));
  }

  /**
   * get provider practice locations
   * @param options options
   * @param params search parameter
   */
  getProviderPracticeLocations(options: ProviderSearchOptions = {}, params: { [param: string]: string | string[] }) {
    const { page, size } = this.getPageSize(options);

    this.cleanParam(params);

    return this.http
      .get<IBackendResponse<ProviderResultJson>>(this.path('/validation/providers/search'), {params})
      .pipe(map(res => {
        res.results.forEach((value => {
          value.name = value.firstName + ' ' + value.lastName;
        }));

        res.results = res.results.sort(sortMethodWithOrderMultiColumn([
          { property: 'practiceLocation', order: 'asc' },
          { property: 'status', order: 'asc' },
          { property: 'state', order: 'asc' },
          { property: 'city', order: 'asc' },
          { property: 'addressLine1', order: 'asc' },
          { property: 'npi', order: 'asc' },
          { property: 'taxId', order: 'asc' },
        ]));

        this.setIds(res.results);

        return this.getPagingResponse(res.results, page, size);
      }));
  }

  /**
   * get producer organizations
   * @param options search options
   * @param params search parameters
   */
  getProducerOrganization(options: ProducerSearchOptions = {}, params: { [param: string]: string | string[] }) {
    const { page, size } = this.getPageSize(options);

    this.cleanParam(params);

    return this.http
      .get<IBackendResponse<ProducerResultJson>>(this.path('/validation/producers/search'), {params})
      .pipe(map(res => {
        res.results.sort(sortMethodWithOrderMultiColumn([
          { property: 'producerOrgName', order: 'asc' },
          { property: 'status', order: 'asc' },
        ]));

        this.setIds(res.results);

        return this.getPagingResponse(res.results, page, size);
      }));
  }

  /**
   * get groups
   * @param options search options
   * @param params search parameter
   */
  getGroups(options: GroupSearchOptions = {}, params: { [param: string]: string | string[] }) {
    const { page, size } = this.getPageSize(options);

    this.cleanParam(params);

    return this.http
      .get<IBackendResponse<GroupResultJson>>(this.path('/validation/groups/search'), {params})
      .pipe(map(res => {
        this.setIds(res.results);
        return this.getPagingResponse(res.results, page, size);
      }));
  }

  /**
   * get subgroups
   * @param options search options
   * @param params search parameters
   */
  getSubGroups(options: GroupSearchOptions = {}, params: { [param: string]: string | string[] }) {
    const { page, size } = this.getPageSize(options);

    this.cleanParam(params);

    return this.http
      .get<IBackendResponse<GroupResultJson>>(this.path('/validation/groups/search'), {params})
      .pipe(map(res => {
        res.results.sort(sortMethodWithOrderMultiColumn([
          { property: 'groupId', order: 'asc' },
          { property: 'subGroupId', order: 'asc' },
          { property: 'futureEffectiveDate', order: 'desc' },
          { property: 'termDate', order: 'desc' },
        ]));

        this.setIds(res.results);

        return this.getPagingResponse(res.results, page, size);
      }));
  }

  /**
   * set id property. for the backend does not provide id property.
   * @param data data to send id.
   */
  private setIds(data: { id: number }[]) {
    for (let i = 0; i < data.length; i++) {
      data[i].id = i;
    }
  }

  /**
   * delete the null properties.
   * @param params params to clean
   */
  private cleanParam(params: { [param: string]: string | string[] }) {
    for (const key in params) {
      if (!params[key]) {
        delete params[key];
      }
    }
  }
}
