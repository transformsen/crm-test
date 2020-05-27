import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicMemberCaseAboutComponent } from './basic-member-case-about.component';

describe('BasicMemberCaseAboutComponent', () => {
  let component: BasicMemberCaseAboutComponent;
  let fixture: ComponentFixture<BasicMemberCaseAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicMemberCaseAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicMemberCaseAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
