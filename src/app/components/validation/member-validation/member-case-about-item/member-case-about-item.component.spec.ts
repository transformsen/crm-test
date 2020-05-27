import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberCaseAboutItemComponent } from './member-case-about-item.component';

describe('MemberCaseAboutItemComponent', () => {
  let component: MemberCaseAboutItemComponent;
  let fixture: ComponentFixture<MemberCaseAboutItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberCaseAboutItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberCaseAboutItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
