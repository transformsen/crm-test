import { Injectable } from '@angular/core';
import {ApiBaseService} from './common/api-base.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CciService extends ApiBaseService {
  constructor(
    protected http: HttpClient,
  ) {
    super(
      http,
    );

    this.host += '/cci';
  }

  /**
   * get cci data
   */
  getCCI() {
    return this.http.get(this.path('/cci.json'));
  }
}
