import { Injectable } from '@angular/core';
import {ApiBaseService} from './common/api-base.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PlanToPlanJson} from '../models/data/plan-to-plan';
import { IBackendResponse } from '../models/data/backend-response';

@Injectable({
  providedIn: 'root'
})
export class LookupService extends ApiBaseService {
  constructor(
    protected http: HttpClient,
  ) {
    super(
      http,
    );

    this.host += '/lookup';
  }

  /**
   * get plan to plan search list
   */
  getPlanToPlans(): Observable<IBackendResponse<PlanToPlanJson>> {
    return this.http.get<IBackendResponse<PlanToPlanJson>>(this.path('/validation/plans/search'));
  }
}
