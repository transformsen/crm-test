import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicCaseAboutItemComponent } from './basic-case-about-item.component';

describe('BasicCaseAboutItemComponent', () => {
  let component: BasicCaseAboutItemComponent;
  let fixture: ComponentFixture<BasicCaseAboutItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicCaseAboutItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicCaseAboutItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
