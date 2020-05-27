import {Component, Input, ViewChild} from '@angular/core';
import {ValidateSearchFieldsBaseInterface} from '../../../common/fields/common/validate-search-fields-base.interface';
import {SearchFieldsBaseComponent} from '../../common/search-fields-base.component';
import {NpiFieldComponent} from '../../../common/fields/npi-field/npi-field.component';
import {isValidString} from '../../../../utils/validation.util';

export interface NonContractedProviderCaptureFields {
  npi: string;
  state: string;
}

@Component({
  selector: 'app-non-contracted-provider-capture-fields',
  templateUrl: './non-contracted-provider-capture-fields.component.html',
  styleUrls: ['./non-contracted-provider-capture-fields.component.scss']
})
export class NonContractedProviderCaptureFieldsComponent
  extends SearchFieldsBaseComponent<NonContractedProviderCaptureFields>
  implements ValidateSearchFieldsBaseInterface {
  // fields
  @Input() fields: NonContractedProviderCaptureFields = {
    npi: '',
    state: '',
  };
  // npi field
  @ViewChild(NpiFieldComponent) npi: NpiFieldComponent;
  // state error
  stateError: string;

  onEntered() {
    if (this.checkAllValidation()) {
      this.entered.emit();
    }
  }

  /**
   * override on field change to remove state error when value changed
   * @param field target field
   * @param value changed value
   */
  onFieldChange(field: string, value: string) {
    super.onFieldChange(field, value);

    if (field === 'state') {
      this.stateError = null;
    }
  }

  checkAllValidation(): boolean {
    let result = true;

    if (!this.npi.checkValidation()) {
      result = false;
    }

    if (!isValidString(this.fields.state)) {
      result = false;
      this.stateError = 'Please select state';
    }

    return result;
  }
}
