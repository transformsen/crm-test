import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractedProviderSearchFieldsComponent } from './contracted-provider-search-fields.component';

describe('ContractedProviderSearchFieldsComponent', () => {
  let component: ContractedProviderSearchFieldsComponent;
  let fixture: ComponentFixture<ContractedProviderSearchFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractedProviderSearchFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractedProviderSearchFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
