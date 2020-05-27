import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicGroupCaseFromComponent } from './basic-group-case-from.component';

describe('BasicGroupCaseFromComponent', () => {
  let component: BasicGroupCaseFromComponent;
  let fixture: ComponentFixture<BasicGroupCaseFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicGroupCaseFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicGroupCaseFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
