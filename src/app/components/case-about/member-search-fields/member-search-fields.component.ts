import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {PolicyIdFieldComponent} from '../../common/fields/policy-id-field/policy-id-field.component';
import {DateOfBirthFieldComponent} from '../../common/fields/date-of-birth-field/date-of-birth-field.component';
import {CityFieldComponent} from '../../common/fields/city-field/city-field.component';
import {SsnFieldComponent} from '../../common/fields/ssn-field/ssn-field.component';
import {ValidateSearchFieldsBaseInterface} from '../../common/fields/common/validate-search-fields-base.interface';
import {CaseAboutFieldsBaseComponent} from '../common/case-about-fields-base.component';

export interface MemberSearchFields {
  policyId: string;
  firstName: string;
  lastName: string;
  dob: string;
  city: string;
  state: string;
  ssn: string;
}

@Component({
  selector: 'app-member-search-fields',
  templateUrl: './member-search-fields.component.html',
  styleUrls: ['./member-search-fields.component.scss']
})
export class MemberSearchFieldsComponent extends CaseAboutFieldsBaseComponent implements OnInit, ValidateSearchFieldsBaseInterface {
  // fields for member search
  @Input() fields: MemberSearchFields = {
    policyId: '',
    firstName: '',
    lastName: '',
    dob: '',
    city: '',
    state: '',
    ssn: '',
  };
  // policy id field
  @ViewChild(PolicyIdFieldComponent) policyId: PolicyIdFieldComponent;
  // date of birth field
  @ViewChild(DateOfBirthFieldComponent) dob: DateOfBirthFieldComponent;
  // city field
  @ViewChild(CityFieldComponent) city: CityFieldComponent;
  // ssn field
  @ViewChild(SsnFieldComponent) ssn: SsnFieldComponent;

  /**
   * handle entered
   */
  onEntered() {
    if (this.checkAllValidation()) {
      this.entered.emit();
    }
  }

  /**
   * check all validation
   */
  checkAllValidation() {
    let result = true;

    this.fieldList.forEach(field => {
      const res = field.checkValidation();

      if (!res) {
        result = false;
      }
    });

    return result;
  }

  /**
   * return view children as list
   */
  get fieldList() {
    return [
      this.policyId,
      this.dob,
      this.city,
      this.ssn,
    ];
  }
}
