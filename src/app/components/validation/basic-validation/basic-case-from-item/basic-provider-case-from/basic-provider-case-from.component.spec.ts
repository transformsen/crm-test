import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicProviderCaseFromComponent } from './basic-provider-case-from.component';

describe('BasicProviderCaseFromComponent', () => {
  let component: BasicProviderCaseFromComponent;
  let fixture: ComponentFixture<BasicProviderCaseFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicProviderCaseFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicProviderCaseFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
