import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueCardInputFieldsComponent } from './blue-card-input-fields.component';

describe('BlueCardInputFieldsComponent', () => {
  let component: BlueCardInputFieldsComponent;
  let fixture: ComponentFixture<BlueCardInputFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlueCardInputFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlueCardInputFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
