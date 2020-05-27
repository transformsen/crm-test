import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicHipaaPathwaysComponent } from './basic-hipaa-pathways.component';

describe('BasicHipaaPathwaysComponent', () => {
  let component: BasicHipaaPathwaysComponent;
  let fixture: ComponentFixture<BasicHipaaPathwaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicHipaaPathwaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicHipaaPathwaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
