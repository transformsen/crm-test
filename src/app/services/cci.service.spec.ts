import { TestBed } from '@angular/core/testing';

import { CciService } from './cci.service';

describe('CciService', () => {
  let service: CciService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CciService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
