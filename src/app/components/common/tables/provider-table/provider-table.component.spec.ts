import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderTableComponent } from './provider-table.component';

describe('ProviderTableComponent', () => {
  let component: ProviderTableComponent;
  let fixture: ComponentFixture<ProviderTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
