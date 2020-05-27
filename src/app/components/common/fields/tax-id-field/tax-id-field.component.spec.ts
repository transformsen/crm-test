import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxIdFieldComponent } from './tax-id-field.component';

describe('TaxIdFieldComponent', () => {
  let component: TaxIdFieldComponent;
  let fixture: ComponentFixture<TaxIdFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxIdFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxIdFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
