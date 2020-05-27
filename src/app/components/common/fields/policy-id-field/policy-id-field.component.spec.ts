import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyIdFieldComponent } from './policy-id-field.component';

describe('PolicyIdFieldComponent', () => {
  let component: PolicyIdFieldComponent;
  let fixture: ComponentFixture<PolicyIdFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyIdFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyIdFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
