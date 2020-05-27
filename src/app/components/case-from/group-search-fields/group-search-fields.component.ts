import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {SearchFieldsBaseComponent} from '../common/search-fields-base.component';
import {ValidateSearchFieldsBaseInterface} from '../../common/fields/common/validate-search-fields-base.interface';
import {NameFieldComponent} from '../../common/fields/name-field/name-field.component';
import {Store} from '@ngrx/store';
import {setCaseFromSearchFields} from '../../../stores/case-from-store/case-from-store.actions';
import * as _ from 'lodash';
import {getElement} from '../../../utils/element.util';
import {isValidString} from '../../../utils/validation.util';

export interface GroupSearchFields {
  groupId: string;
  groupName: string;
  subGroupId: string;
  subGroupName: string;
}

@Component({
  selector: 'app-group-search-fields',
  templateUrl: './group-search-fields.component.html',
  styleUrls: ['./group-search-fields.component.scss']
})
export class GroupSearchFieldsComponent
  extends SearchFieldsBaseComponent<GroupSearchFields>
  implements OnInit, ValidateSearchFieldsBaseInterface {

  // fields
  @Input() fields: GroupSearchFields = {
    groupId: '',
    groupName: '',
    subGroupId: '',
    subGroupName: '',
  };

  // group id field
  @ViewChild('groupId') groupId: NameFieldComponent;
  // sub group id field
  @ViewChild('subGroupId') subGroupId: NameFieldComponent;
  // group name field
  @ViewChild('groupName') groupName: NameFieldComponent;
  // sub group name field
  @ViewChild('subGroupName') subGroupName: NameFieldComponent;

  constructor(
    private store: Store,
  ) {
    super();
  }

  ngOnInit(): void {
    this.setSearchFields();
  }

  /**
   * handle entered event
   */
  onEntered() {
    if (this.checkAllValidation()) {
      this.entered.emit();
    }
  }

  onFieldChange(field: string, value: string) {
    // remove error
    if (field === 'groupId') {
      this.groupId.inputField.error = null;
    }

    if (field === 'groupId') {
      if (this.fields.groupId && this.fields.groupId.length > 8) {
        // if group id is 9 digit,
        // move focus to sub group id
        this.subGroupId.focus();
        this.fields.groupId = value.substr(0, 9);
        this.fields.subGroupId = (this.fields.subGroupId || '') + value.substr(9);

        // update group id input value
        const el = getElement(this.groupId.inputField.input);

        el.value = this.fields.groupId;
      } else {
        this.fields[field] = value;
      }
    } else {
      this.fields[field] = value;
    }

    this.setSearchFields();
  }

  /**
   * set search fields to store
   */
  private setSearchFields() {
    this.store.dispatch(setCaseFromSearchFields({fields: _.cloneDeep(this.fields) as any}));
  }

  checkAllValidation(): boolean {
    let result = true;

    this.fieldList.forEach(item => {
      if (!item.checkValidation()) {
        result = false;
      }
    });

    if (isValidString(this.fields.subGroupId) && (!this.fields.groupId || !isValidString(this.fields.groupId))) {
      this.groupId.inputField.error = 'Enter a Group ID';
      result = false;
    }

    return result;
  }

  get fieldList() {
    return [
      this.groupId,
      this.subGroupId,
      this.groupName,
      this.subGroupName,
    ];
  }
}
