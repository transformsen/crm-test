import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseFromComponent } from './case-from.component';

describe('CaseFromComponent', () => {
  let component: CaseFromComponent;
  let fixture: ComponentFixture<CaseFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
