import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CciModalComponent } from './cci-modal.component';

describe('CciModalComponent', () => {
  let component: CciModalComponent;
  let fixture: ComponentFixture<CciModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CciModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CciModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
