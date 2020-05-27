import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberValidationComponent } from './member-validation.component';

describe('MemberValidationComponent', () => {
  let component: MemberValidationComponent;
  let fixture: ComponentFixture<MemberValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
