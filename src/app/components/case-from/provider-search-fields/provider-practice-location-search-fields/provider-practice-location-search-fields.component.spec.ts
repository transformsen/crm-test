import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderPracticeLocationSearchFieldsComponent } from './provider-practice-location-search-fields.component';

describe('ProviderPracticeLocationSearchFielsdsComponent', () => {
  let component: ProviderPracticeLocationSearchFieldsComponent;
  let fixture: ComponentFixture<ProviderPracticeLocationSearchFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderPracticeLocationSearchFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderPracticeLocationSearchFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
