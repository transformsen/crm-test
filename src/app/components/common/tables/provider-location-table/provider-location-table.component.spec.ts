import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderLocationTableComponent } from './provider-location-table.component';

describe('ProviderLocationTableComponent', () => {
  let component: ProviderLocationTableComponent;
  let fixture: ComponentFixture<ProviderLocationTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderLocationTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderLocationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
