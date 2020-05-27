import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconChevronUpComponent } from './icon-chevron-up.component';

describe('IconChevronUpComponent', () => {
  let component: IconChevronUpComponent;
  let fixture: ComponentFixture<IconChevronUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconChevronUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconChevronUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
