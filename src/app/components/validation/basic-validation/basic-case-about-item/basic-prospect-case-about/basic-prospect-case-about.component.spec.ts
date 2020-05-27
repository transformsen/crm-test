import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicProspectCaseAboutComponent } from './basic-prospect-case-about.component';

describe('BasicProspectCaseAboutComponent', () => {
  let component: BasicProspectCaseAboutComponent;
  let fixture: ComponentFixture<BasicProspectCaseAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicProspectCaseAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicProspectCaseAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
