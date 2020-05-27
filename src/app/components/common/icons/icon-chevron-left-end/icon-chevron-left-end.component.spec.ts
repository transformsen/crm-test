import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconChevronLeftEndComponent } from './icon-chevron-left-end.component';

describe('IconChevronLeftEndComponent', () => {
  let component: IconChevronLeftEndComponent;
  let fixture: ComponentFixture<IconChevronLeftEndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconChevronLeftEndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconChevronLeftEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
