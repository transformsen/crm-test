import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateOfBirthFieldComponent } from './date-of-birth-field.component';

describe('DateOfBirthFieldComponent', () => {
  let component: DateOfBirthFieldComponent;
  let fixture: ComponentFixture<DateOfBirthFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateOfBirthFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateOfBirthFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
