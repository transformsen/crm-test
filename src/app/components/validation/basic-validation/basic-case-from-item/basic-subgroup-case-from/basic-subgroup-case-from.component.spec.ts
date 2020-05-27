import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicSubgroupCaseFromComponent } from './basic-subgroup-case-from.component';

describe('BasicSubgroupCaseFromComponent', () => {
  let component: BasicSubgroupCaseFromComponent;
  let fixture: ComponentFixture<BasicSubgroupCaseFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicSubgroupCaseFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicSubgroupCaseFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
