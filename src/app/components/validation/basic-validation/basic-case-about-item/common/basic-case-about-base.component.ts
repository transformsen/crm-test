import {Input} from '@angular/core';
import {AppCaseAboutItemType} from '../../../../../stores/case-about-store/case-about-store.reducer';
import * as _ from 'lodash';

export class BasicCaseAboutBaseComponent<T> {
  // case about item type
  @Input() type: AppCaseAboutItemType;
  // member data
  @Input() data: T;

  // opened state of detail
  opened = false;
  // checked states
  checked: any = {};
  // pathway valid state
  pathwayValid = false;
  // selection
  selections: string[] = [];

  /**
   * open detail
   */
  openDetail() {
    this.opened = true;
  }

  /**
   * close detail
   */
  closeDetail() {
    this.opened = false;
  }

  /**
   * toggle detail opened state
   */
  toggleDetail() {
    if (this.opened) {
      this.closeDetail();
    } else {
      this.openDetail();
    }
  }

  /**
   * handle field checked
   * @param field field
   */
  onFieldChecked(field: string) {
    this.pathwayValid = false;
    this.checked[field] = !this.checked[field];
    this.toggleSelection(field);
  }

  /**
   * toggle selection on field checked
   * @param field field
   */
  toggleSelection(field: string) {
    const index = this.selections.indexOf(field);

    if (index !== -1) {
      this.selections.splice(index, 1);
    } else {
      this.selections.push(field);
    }

    // clone selection to trigger changes
    this.selections = _.cloneDeep(this.selections);
  }

  /**
   * toggle name field
   * @param field field
   */
  toggleNameField(field: string) {
    const reverseFields = {
      firstName: 'lastName',
      lastName: 'firstName',
    };

    const lastIndex = this.selections.length - 1;
    const targetNameIndex = this.selections.indexOf(field);

    if (this.selections.length > 0 && targetNameIndex === -1) {
      // if target field not exists and selection is not empty,
      // check 'name' field's existence first
      // if 'name' is exists, remove 'name' and add reverse field
      const nameIndex = this.selections.indexOf('name');

      // check existence of the 'name'
      if (nameIndex !== -1) {
        // if 'name' exists, remove name and add reverse field to index
        this.selections.splice(nameIndex, 1, reverseFields[field]);
      } else {
        // if 'name' not exists,
        // check existence of the reverse field
        if (this.selections[lastIndex] === reverseFields[field]) {
          // if reverse field exists in last index, remove reverse field and add 'name' field
          this.selections.splice(lastIndex, 1, 'name');
        } else {
          // if reverse field doesn't exists, add target field
          this.selections.push(field);
        }
      }
    } else {
      if (targetNameIndex !== -1) {
        this.selections.splice(targetNameIndex, 1);
      } else {
        this.selections.push(field);
      }
    }
  }

  /**
   * set pathway valid
   */
  onValidated() {
    this.pathwayValid = true;
  }
}
