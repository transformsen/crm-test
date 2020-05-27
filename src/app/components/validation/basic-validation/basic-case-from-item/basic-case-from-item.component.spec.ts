import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicCaseFromItemComponent } from './basic-case-from-item.component';

describe('BasicCaseFromItemComponent', () => {
  let component: BasicCaseFromItemComponent;
  let fixture: ComponentFixture<BasicCaseFromItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicCaseFromItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicCaseFromItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
