import {Component} from '@angular/core';
import {BasicCaseAboutBaseComponent} from '../common/basic-case-about-base.component';
import {MemberResultJson} from '../../../../../models/data/member-result';
import * as _ from 'lodash';

@Component({
  selector: 'app-basic-member-case-about',
  templateUrl: './basic-member-case-about.component.html',
  styleUrls: [
    '../common/basic-case-about-base.component.scss',
    './basic-member-case-about.component.scss'
  ]
})
export class BasicMemberCaseAboutComponent extends BasicCaseAboutBaseComponent<MemberResultJson> {
  checked = {
    firstName: false,
    lastName: false,
    relationship: false,
    policyId: false,
    ssn: false,
    last4ssn: false,
    dateOfBirth: false,
    address: false,
  };

  /**
   * override field checked method
   * @param field field
   */
  onFieldChecked(field: string) {
    this.pathwayValid = false;
    this.defineCheckedField(field);
  }

  /**
   * define checked field
   * @param field field name
   */
  private defineCheckedField(field: string) {
    switch (field) {
      case 'ssn': {
        this.onClickFullSSN();
        break;
      }

      case 'last4ssn': {
        this.onClickLast4SSN();
        break;
      }

      default: {
        this.checked[field] = !this.checked[field];
        break;
      }
    }

    this.toggleSelection(field);
  }

  /**
   * toggle selection
   * @param field selected field
   */
  toggleSelection(field: string) {
    if (field === 'firstName' || field === 'lastName') {
      this.toggleNameField(field);
    } else if (field === 'ssn' || field === 'last4ssn') {
      this.toggleSSNField(field);
    } else {
      const index = this.selections.indexOf(field);

      if (index !== -1) {
        this.selections.splice(index, 1);
      } else {
        this.selections.push(field);
      }
    }

    // clone to trigger changes
    this.selections = _.cloneDeep(this.selections);
  }

  /**
   * toggle ssn field
   * @param field field
   */
  toggleSSNField(field: string) {
    if (field === 'last4ssn') {
      const last4Index = this.selections.indexOf(field);

      if (last4Index !== -1) {
        // if last4ssn exists, remove last4ssn
        this.selections.splice(last4Index, 1);
      } else {
        // if last4ssn not exists, check ssn existence
        const ssnIndex = this.selections.indexOf('ssn');

        if (ssnIndex !== -1) {
          // if ssn exists, remove ssn
          this.selections.splice(ssnIndex, 1);
        } else {
          // is ssn not exists, add last4ssn
          this.selections.push(field);
        }
      }
    } else {
      const ssnIndex = this.selections.indexOf(field);

      if (ssnIndex !== -1) {
        // if ssn exists, remove ssn
        this.selections.splice(ssnIndex, 1);
      } else {
        // if ssn not exists, check last4ssn existence
        const last4Index = this.selections.indexOf('last4ssn');

        if (last4Index !== -1) {
          // if last4ssn exists, remove last4ssn
          this.selections.splice(last4Index, 1);
        }

        // add ssn
        this.selections.push(field);
      }
    }
  }

  /**
   * when clicking full ssn, check last 4 ssn too
   */
  private onClickFullSSN() {
    this.checked.ssn = !this.checked.ssn;
    this.checked.last4ssn = this.checked.ssn;
  }

  /**
   * when clicking last 4 ssn, uncheck full ssn
   */
  private onClickLast4SSN() {
    this.checked.last4ssn = !this.checked.last4ssn;
    this.checked.ssn = false;
  }
}
