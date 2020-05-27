import {InputFieldBaseComponent} from './input-field-base.component';
import {ViewChild} from '@angular/core';
import {InputFieldComponent} from '../input-field/input-field.component';

export class CustomInputFieldBaseComponent<T = string> extends InputFieldBaseComponent<T> {
  // input field component
  @ViewChild(InputFieldComponent) inputField: InputFieldComponent;

  /**
   * set focus to input
   */
  focus() {
    if (this.inputField) {
      this.inputField.focus();
    }
  }
}
