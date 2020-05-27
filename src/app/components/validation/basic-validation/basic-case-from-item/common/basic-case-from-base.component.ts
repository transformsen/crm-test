import {Input} from '@angular/core';
import {AppCaseFromItemType} from '../../../../../stores/case-from-store/case-from-store.reducer';

export class BasicCaseFromBaseComponent<T> {
  // case from item type
  @Input() type: AppCaseFromItemType;
  // data
  @Input() data: T;

  // opened state of detail
  opened = false;
  // checked states
  checked: any = {};

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
    this.checked[field] = !this.checked[field];
  }
}
