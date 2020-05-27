import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconChevronRightEndComponent } from './icon-chevron-right-end.component';

describe('IconChevronRightEndComponent', () => {
  let component: IconChevronRightEndComponent;
  let fixture: ComponentFixture<IconChevronRightEndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconChevronRightEndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconChevronRightEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
