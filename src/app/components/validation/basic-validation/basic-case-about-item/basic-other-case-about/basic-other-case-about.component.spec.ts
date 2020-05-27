import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicOtherCaseAboutComponent } from './basic-other-case-about.component';

describe('BasicOtherCaseAboutComponent', () => {
  let component: BasicOtherCaseAboutComponent;
  let fixture: ComponentFixture<BasicOtherCaseAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicOtherCaseAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicOtherCaseAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
