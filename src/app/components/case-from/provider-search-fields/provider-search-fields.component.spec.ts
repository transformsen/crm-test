import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderSearchFieldsComponent } from './provider-search-fields.component';

describe('ProviderSearchFieldsComponent', () => {
  let component: ProviderSearchFieldsComponent;
  let fixture: ComponentFixture<ProviderSearchFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderSearchFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderSearchFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
