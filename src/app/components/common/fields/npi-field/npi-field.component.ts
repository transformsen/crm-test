import {Component, Input} from '@angular/core';
import {isValidString} from '../../../../utils/validation.util';
import {InputFieldBaseComponent} from '../common/input-field-base.component';
import {ValidateInputBaseInterface} from '../common/validate-input-base.interface';

@Component({
  selector: 'app-npi-field',
  templateUrl: './npi-field.component.html',
  styleUrls: ['./npi-field.component.scss']
})
export class NpiFieldComponent extends InputFieldBaseComponent implements ValidateInputBaseInterface {
  // label
  @Input() label = 'National Provider Identifier (NPI)';

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
      if (this.appValue.length < 10) {
        this.error = 'Enter a 10-digit value.';
      }
    }

    return !this.error;
  }
}
