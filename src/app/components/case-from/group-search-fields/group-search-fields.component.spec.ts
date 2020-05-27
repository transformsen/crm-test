import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupSearchFieldsComponent } from './group-search-fields.component';

describe('GroupSearchFieldsComponent', () => {
  let component: GroupSearchFieldsComponent;
  let fixture: ComponentFixture<GroupSearchFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupSearchFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupSearchFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
