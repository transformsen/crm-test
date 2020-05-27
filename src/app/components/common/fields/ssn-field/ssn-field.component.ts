import {Component, Input} from '@angular/core';
import {InputFieldBaseComponent} from '../common/input-field-base.component';
import {ValidateInputBaseInterface} from '../common/validate-input-base.interface';
import {isValidString} from '../../../../utils/validation.util';

@Component({
  selector: 'app-ssn-field',
  templateUrl: './ssn-field.component.html',
  styleUrls: ['./ssn-field.component.scss']
})
export class SsnFieldComponent extends InputFieldBaseComponent implements ValidateInputBaseInterface {
  // label
  @Input() label = 'Social Security Number';

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
      if (this.appValue.length !== 11) {
        this.error = 'Enter a 9-digit value.';
      }
    }

    return !this.error;
  }
}
