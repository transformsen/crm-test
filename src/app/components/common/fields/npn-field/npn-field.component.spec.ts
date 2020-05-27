import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpnFieldComponent } from './npn-field.component';

describe('NpnFieldComponent', () => {
  let component: NpnFieldComponent;
  let fixture: ComponentFixture<NpnFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpnFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpnFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
