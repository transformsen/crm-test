import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanToPlanSearchFieldsComponent } from './plan-to-plan-search-fields.component';

describe('PlanToPlanSearchFieldsComponent', () => {
  let component: PlanToPlanSearchFieldsComponent;
  let fixture: ComponentFixture<PlanToPlanSearchFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanToPlanSearchFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanToPlanSearchFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
