import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderPracticeLocationCaseAboutComponent } from './provider-practice-location-case-about.component';

describe('ProviderPracticeLocationCaseAboutComponent', () => {
  let component: ProviderPracticeLocationCaseAboutComponent;
  let fixture: ComponentFixture<ProviderPracticeLocationCaseAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderPracticeLocationCaseAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderPracticeLocationCaseAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
