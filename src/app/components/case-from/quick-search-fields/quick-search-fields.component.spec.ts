import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickSearchFieldsComponent } from './quick-search-fields.component';

describe('QuickSearchFieldsComponent', () => {
  let component: QuickSearchFieldsComponent;
  let fixture: ComponentFixture<QuickSearchFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickSearchFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickSearchFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
