import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveControllersComponent } from './save-controllers.component';

describe('SaveControllersComponent', () => {
  let component: SaveControllersComponent;
  let fixture: ComponentFixture<SaveControllersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveControllersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveControllersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
