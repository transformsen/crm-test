import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicOtherCaseFromComponent } from './basic-other-case-from.component';

describe('BasicOtherCaseFromComponent', () => {
  let component: BasicOtherCaseFromComponent;
  let fixture: ComponentFixture<BasicOtherCaseFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicOtherCaseFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicOtherCaseFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
