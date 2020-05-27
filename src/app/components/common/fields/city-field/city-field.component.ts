import {Component, Input} from '@angular/core';
import {InputFieldBaseComponent} from '../common/input-field-base.component';
import {ValidateInputBaseInterface} from '../common/validate-input-base.interface';
import {isValidString} from '../../../../utils/validation.util';

@Component({
  selector: 'app-city-field',
  templateUrl: './city-field.component.html',
  styleUrls: ['./city-field.component.scss']
})
export class CityFieldComponent extends InputFieldBaseComponent implements ValidateInputBaseInterface {
  // label
  @Input() label = 'City';

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
      if (this.appValue.length < 2) {
        this.error = 'Enter at least 2 characters.';
      }
    }

    return !this.error;
  }
}
