import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducerOrganizationTableComponent } from './producer-organization-table.component';

describe('ProducerOrganizationTableComponent', () => {
  let component: ProducerOrganizationTableComponent;
  let fixture: ComponentFixture<ProducerOrganizationTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProducerOrganizationTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducerOrganizationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
