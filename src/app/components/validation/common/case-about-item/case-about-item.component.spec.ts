import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseAboutItemComponent } from './case-about-item.component';

describe('CaseAboutItemComponent', () => {
  let component: CaseAboutItemComponent;
  let fixture: ComponentFixture<CaseAboutItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseAboutItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseAboutItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
