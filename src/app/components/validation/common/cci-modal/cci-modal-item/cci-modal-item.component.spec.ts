import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CciModalItemComponent } from './cci-modal-item.component';

describe('CciModalItemComponent', () => {
  let component: CciModalItemComponent;
  let fixture: ComponentFixture<CciModalItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CciModalItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CciModalItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
