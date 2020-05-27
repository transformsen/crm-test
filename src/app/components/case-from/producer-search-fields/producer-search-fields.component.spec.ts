import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducerSearchFieldsComponent } from './producer-search-fields.component';

describe('ProducerSearchFieldsComponent', () => {
  let component: ProducerSearchFieldsComponent;
  let fixture: ComponentFixture<ProducerSearchFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProducerSearchFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducerSearchFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
