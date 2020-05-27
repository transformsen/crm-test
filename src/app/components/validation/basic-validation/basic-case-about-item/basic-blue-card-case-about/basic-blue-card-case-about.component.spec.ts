import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicBlueCardCaseAboutComponent } from './basic-blue-card-case-about.component';

describe('BasicBlueCardCaseAboutComponent', () => {
  let component: BasicBlueCardCaseAboutComponent;
  let fixture: ComponentFixture<BasicBlueCardCaseAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicBlueCardCaseAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicBlueCardCaseAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
