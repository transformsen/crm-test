import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicSubgroupCaseAboutComponent } from './basic-subgroup-case-about.component';

describe('BasicSubgroupCaseAboutComponent', () => {
  let component: BasicSubgroupCaseAboutComponent;
  let fixture: ComponentFixture<BasicSubgroupCaseAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicSubgroupCaseAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicSubgroupCaseAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
