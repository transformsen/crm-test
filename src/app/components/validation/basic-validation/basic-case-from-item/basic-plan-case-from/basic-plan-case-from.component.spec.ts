import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicPlanCaseFromComponent } from './basic-plan-case-from.component';

describe('BasicPlanCaseFromComponent', () => {
  let component: BasicPlanCaseFromComponent;
  let fixture: ComponentFixture<BasicPlanCaseFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicPlanCaseFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicPlanCaseFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
