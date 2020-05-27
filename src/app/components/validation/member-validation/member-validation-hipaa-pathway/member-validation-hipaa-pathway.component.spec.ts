import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberValidationHipaaPathwayComponent } from './member-validation-hipaa-pathway.component';

describe('MemberValidationHipaaPathwayComponent', () => {
  let component: MemberValidationHipaaPathwayComponent;
  let fixture: ComponentFixture<MemberValidationHipaaPathwayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberValidationHipaaPathwayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberValidationHipaaPathwayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
