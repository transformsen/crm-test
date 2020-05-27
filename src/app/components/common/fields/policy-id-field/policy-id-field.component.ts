import {Component, Input} from '@angular/core';
import {isValidString} from '../../../../utils/validation.util';
import {InputFieldBaseComponent} from '../common/input-field-base.component';
import {ValidateInputBaseInterface} from '../common/validate-input-base.interface';

@Component({
  selector: 'app-policy-id-field',
  templateUrl: './policy-id-field.component.html',
  styleUrls: ['./policy-id-field.component.scss']
})
export class PolicyIdFieldComponent extends InputFieldBaseComponent implements ValidateInputBaseInterface {
  // label
  @Input() label = 'Policy ID';

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

  checkValidation(): boolean {
    if (isValidString(this.appValue)) {
      if (this.appValue.length !== 9) {
        this.error = 'Enter a 9-digit value.';
      }
    }

    return !this.error;
  }
}
