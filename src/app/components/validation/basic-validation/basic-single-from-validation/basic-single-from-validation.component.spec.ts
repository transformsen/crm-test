import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicSingleFromValidationComponent } from './basic-single-from-validation.component';

describe('BasicSingleFromValidationComponent', () => {
  let component: BasicSingleFromValidationComponent;
  let fixture: ComponentFixture<BasicSingleFromValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicSingleFromValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicSingleFromValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
