import {Component, Input} from '@angular/core';
import {InputFieldBaseComponent} from '../common/input-field-base.component';
import {ValidateInputBaseInterface} from '../common/validate-input-base.interface';
import {isValidString} from '../../../../utils/validation.util';

@Component({
  selector: 'app-date-of-birth-field',
  templateUrl: './date-of-birth-field.component.html',
  styleUrls: ['./date-of-birth-field.component.scss']
})
export class DateOfBirthFieldComponent extends InputFieldBaseComponent implements ValidateInputBaseInterface {
  // label
  @Input() label = 'Date of Birth';

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
      // check date format `mm/dd/yyyy`
      if (!/^(?:(0[1-9]|1[012])[\/.](0[1-9]|[12][0-9]|3[01])[\/.](19|20)[0-9]{2})$/.exec(this.appValue)) {
        this.error = 'Enter a valid MM/DD/YYYY.';
      }
    }

    return !this.error;
  }
}
