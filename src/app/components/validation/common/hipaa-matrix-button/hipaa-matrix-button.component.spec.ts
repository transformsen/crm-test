import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HipaaMatrixButtonComponent } from './hipaa-matrix-button.component';

describe('HipaaMatrixButtonComponent', () => {
  let component: HipaaMatrixButtonComponent;
  let fixture: ComponentFixture<HipaaMatrixButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HipaaMatrixButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HipaaMatrixButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
