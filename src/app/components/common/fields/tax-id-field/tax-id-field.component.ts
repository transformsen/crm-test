import {Component, Input, OnInit} from '@angular/core';
import {InputFieldBaseComponent} from '../common/input-field-base.component';
import {ValidateInputBaseInterface} from '../common/validate-input-base.interface';
import {isValidString} from '../../../../utils/validation.util';

@Component({
  selector: 'app-tax-id-field',
  templateUrl: './tax-id-field.component.html',
  styleUrls: ['./tax-id-field.component.scss']
})
export class TaxIdFieldComponent extends InputFieldBaseComponent implements ValidateInputBaseInterface {
  // label
  @Input() label = 'Tax ID';

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
      if (this.appValue.length !== 10) {
        this.error = 'Enter a 9-digit value.';
      }
    }

    return !this.error;
  }
}
