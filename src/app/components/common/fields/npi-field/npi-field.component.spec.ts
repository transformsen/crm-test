import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpiFieldComponent } from './npi-field.component';

describe('NpiFieldComponent', () => {
  let component: NpiFieldComponent;
  let fixture: ComponentFixture<NpiFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpiFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpiFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
