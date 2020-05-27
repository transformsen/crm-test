import { TestBed } from '@angular/core/testing';

import { CaseAboutGuard } from './case-about.guard';

describe('CaseAboutGuard', () => {
  let guard: CaseAboutGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CaseAboutGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
