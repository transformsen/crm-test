import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedProviderTableComponent } from './advanced-provider-table.component';

describe('AdvancedProviderTableComponent', () => {
  let component: AdvancedProviderTableComponent;
  let fixture: ComponentFixture<AdvancedProviderTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedProviderTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedProviderTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
