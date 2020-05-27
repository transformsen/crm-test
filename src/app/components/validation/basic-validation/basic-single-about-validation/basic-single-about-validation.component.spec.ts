import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicSingleAboutValidationComponent } from './basic-single-about-validation.component';

describe('BasicSingleAboutValidationComponent', () => {
  let component: BasicSingleAboutValidationComponent;
  let fixture: ComponentFixture<BasicSingleAboutValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicSingleAboutValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicSingleAboutValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
