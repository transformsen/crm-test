import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicProducerCaseAboutComponent } from './basic-producer-case-about.component';

describe('BasicProducerCaseAboutComponent', () => {
  let component: BasicProducerCaseAboutComponent;
  let fixture: ComponentFixture<BasicProducerCaseAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicProducerCaseAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicProducerCaseAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
