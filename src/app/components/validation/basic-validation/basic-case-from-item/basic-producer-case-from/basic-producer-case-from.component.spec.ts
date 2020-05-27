import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicProducerCaseFromComponent } from './basic-producer-case-from.component';

describe('BasicProducerCaseFromComponent', () => {
  let component: BasicProducerCaseFromComponent;
  let fixture: ComponentFixture<BasicProducerCaseFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicProducerCaseFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicProducerCaseFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
