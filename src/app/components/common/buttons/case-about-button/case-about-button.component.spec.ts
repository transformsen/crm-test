import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseAboutButtonComponent } from './case-about-button.component';

describe('CaseAboutButtonComponent', () => {
  let component: CaseAboutButtonComponent;
  let fixture: ComponentFixture<CaseAboutButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseAboutButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseAboutButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
