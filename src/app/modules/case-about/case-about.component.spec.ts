import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseAboutComponent } from './case-about.component';

describe('CaseAboutComponent', () => {
  let component: CaseAboutComponent;
  let fixture: ComponentFixture<CaseAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
