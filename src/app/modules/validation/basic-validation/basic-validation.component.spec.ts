import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicValidationComponent } from './basic-validation.component';

describe('BasicValidationComponent', () => {
  let component: BasicValidationComponent;
  let fixture: ComponentFixture<BasicValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
