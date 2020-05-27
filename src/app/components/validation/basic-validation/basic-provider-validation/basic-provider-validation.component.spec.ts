import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicProviderValidationComponent } from './basic-provider-validation.component';

describe('BasicProviderValidationComponent', () => {
  let component: BasicProviderValidationComponent;
  let fixture: ComponentFixture<BasicProviderValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicProviderValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicProviderValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
