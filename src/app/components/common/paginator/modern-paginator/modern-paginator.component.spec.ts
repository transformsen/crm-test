import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModernPaginatorComponent } from './modern-paginator.component';

describe('ModernPaginatorComponent', () => {
  let component: ModernPaginatorComponent;
  let fixture: ComponentFixture<ModernPaginatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModernPaginatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModernPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
