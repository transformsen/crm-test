import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicProducerOrganizationCaseFromComponent } from './basic-producer-organization-case-from.component';

describe('BasicProducerOrganizationCaseFromComponent', () => {
  let component: BasicProducerOrganizationCaseFromComponent;
  let fixture: ComponentFixture<BasicProducerOrganizationCaseFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicProducerOrganizationCaseFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicProducerOrganizationCaseFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
