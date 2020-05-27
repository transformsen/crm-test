import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducerOrganizationSearchFieldsComponent } from './producer-organization-search-fields.component';

describe('ProducerOrganizationSearchFieldsComponent', () => {
  let component: ProducerOrganizationSearchFieldsComponent;
  let fixture: ComponentFixture<ProducerOrganizationSearchFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProducerOrganizationSearchFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducerOrganizationSearchFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
