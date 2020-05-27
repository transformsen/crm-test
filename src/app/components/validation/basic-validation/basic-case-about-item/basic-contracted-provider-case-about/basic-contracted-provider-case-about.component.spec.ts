import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicContractedProviderCaseAboutComponent } from './basic-contracted-provider-case-about.component';

describe('BasicContractedProviderCaseAboutComponent', () => {
  let component: BasicContractedProviderCaseAboutComponent;
  let fixture: ComponentFixture<BasicContractedProviderCaseAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicContractedProviderCaseAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicContractedProviderCaseAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
