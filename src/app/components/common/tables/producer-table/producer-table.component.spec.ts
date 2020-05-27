import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducerTableComponent } from './producer-table.component';

describe('ProducerTableComponent', () => {
  let component: ProducerTableComponent;
  let fixture: ComponentFixture<ProducerTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProducerTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
