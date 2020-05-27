import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanToPlanFieldComponent } from './plan-to-plan-field.component';

describe('PlanToPlanFieldComponent', () => {
  let component: PlanToPlanFieldComponent;
  let fixture: ComponentFixture<PlanToPlanFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanToPlanFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanToPlanFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
