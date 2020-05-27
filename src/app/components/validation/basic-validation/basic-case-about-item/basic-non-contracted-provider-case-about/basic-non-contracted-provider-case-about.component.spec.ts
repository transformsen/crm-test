import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicNonContractedProviderCaseAboutComponent } from './basic-non-contracted-provider-case-about.component';

describe('BasicNonContractedProviderCaseAboutComponent', () => {
  let component: BasicNonContractedProviderCaseAboutComponent;
  let fixture: ComponentFixture<BasicNonContractedProviderCaseAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicNonContractedProviderCaseAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicNonContractedProviderCaseAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
