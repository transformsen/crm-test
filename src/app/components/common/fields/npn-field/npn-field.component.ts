import {Component, Input} from '@angular/core';
import {InputFieldBaseComponent} from '../common/input-field-base.component';
import {ValidateInputBaseInterface} from '../common/validate-input-base.interface';
import { isValidString } from '../../../../utils/validation.util';

@Component({
  selector: 'app-npn-field',
  templateUrl: './npn-field.component.html',
  styleUrls: ['./npn-field.component.scss']
})
export class NpnFieldComponent extends InputFieldBaseComponent implements ValidateInputBaseInterface {
  // label
  @Input() label = 'National Producer Number (NPN)';

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
