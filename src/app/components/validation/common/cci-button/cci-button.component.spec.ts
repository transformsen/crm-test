import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CciButtonComponent } from './cci-button.component';

describe('CciButtonComponent', () => {
  let component: CciButtonComponent;
  let fixture: ComponentFixture<CciButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CciButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CciButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
