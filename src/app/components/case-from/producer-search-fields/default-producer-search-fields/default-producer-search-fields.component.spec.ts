import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultProducerSearchFieldsComponent } from './default-producer-search-fields.component';

describe('DefaultProducerSearchFieldsComponent', () => {
  let component: DefaultProducerSearchFieldsComponent;
  let fixture: ComponentFixture<DefaultProducerSearchFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultProducerSearchFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultProducerSearchFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
