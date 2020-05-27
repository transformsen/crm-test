import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchControllersComponent } from './search-controllers.component';

describe('SearchControllersComponent', () => {
  let component: SearchControllersComponent;
  let fixture: ComponentFixture<SearchControllersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchControllersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchControllersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
