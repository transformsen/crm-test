import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherInputFieldsComponent } from './other-input-fields.component';

describe('OtherInputFieldsComponent', () => {
  let component: OtherInputFieldsComponent;
  let fixture: ComponentFixture<OtherInputFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherInputFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherInputFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
