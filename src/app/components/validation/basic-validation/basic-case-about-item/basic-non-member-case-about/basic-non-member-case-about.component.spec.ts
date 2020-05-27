import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicNonMemberCaseAboutComponent } from './basic-non-member-case-about.component';

describe('BasicNonMemberCaseAboutComponent', () => {
  let component: BasicNonMemberCaseAboutComponent;
  let fixture: ComponentFixture<BasicNonMemberCaseAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicNonMemberCaseAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicNonMemberCaseAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
