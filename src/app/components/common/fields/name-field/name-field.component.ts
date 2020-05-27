import {Component, Input} from '@angular/core';
import {ValidateInputBaseInterface} from '../common/validate-input-base.interface';
import {isValidString} from '../../../../utils/validation.util';
import {CustomInputFieldBaseComponent} from '../common/custom-input-field-base.component';

@Component({
  selector: 'app-name-field',
  templateUrl: './name-field.component.html',
  styleUrls: ['./name-field.component.scss']
})
export class NameFieldComponent extends CustomInputFieldBaseComponent implements ValidateInputBaseInterface {
  // minimum length
  @Input() minLength: number;

  /**
   * check policy id validation
   */
  onEntered() {
    if (this.checkValidation()) {
      this.entered.emit(this.appValue);
    } else {
      this.forceEntered.emit();
    }
  }

  /**
   * check validation
   */
  checkValidation() {
    if (isValidString(this.appValue)) {
      if (this.appValue.length < this.minLength) {
        this.error = `Enter at least ${this.minLength} characters.`;
      }
    }

    return !this.error;
  }
}
