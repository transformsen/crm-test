import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspectInputFieldsComponent } from './prospect-input-fields.component';

describe('ProspectInputFieldsComponent', () => {
  let component: ProspectInputFieldsComponent;
  let fixture: ComponentFixture<ProspectInputFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProspectInputFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProspectInputFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
