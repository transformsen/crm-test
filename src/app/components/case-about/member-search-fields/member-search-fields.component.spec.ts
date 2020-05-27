import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberSearchFieldsComponent } from './member-search-fields.component';

describe('CaseAboutSearchFieldsComponent', () => {
  let component: MemberSearchFieldsComponent;
  let fixture: ComponentFixture<MemberSearchFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberSearchFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberSearchFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
