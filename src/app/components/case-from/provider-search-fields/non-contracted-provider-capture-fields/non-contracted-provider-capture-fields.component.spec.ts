import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonContractedProviderCaptureFieldsComponent } from './non-contracted-provider-capture-fields.component';

describe('NonContractedProviderCaptureFieldsComponent', () => {
  let component: NonContractedProviderCaptureFieldsComponent;
  let fixture: ComponentFixture<NonContractedProviderCaptureFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonContractedProviderCaptureFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonContractedProviderCaptureFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
