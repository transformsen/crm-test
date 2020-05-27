import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicMemberValidationComponent } from './basic-member-validation.component';

describe('BasicMemberValidationComponent', () => {
  let component: BasicMemberValidationComponent;
  let fixture: ComponentFixture<BasicMemberValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicMemberValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicMemberValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
