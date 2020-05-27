import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCaseButtonComponent } from './create-case-button.component';

describe('CreateCaseButtonComponent', () => {
  let component: CreateCaseButtonComponent;
  let fixture: ComponentFixture<CreateCaseButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCaseButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCaseButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
