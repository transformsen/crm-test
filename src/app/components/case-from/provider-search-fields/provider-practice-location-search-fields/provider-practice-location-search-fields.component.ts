import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ValidateSearchFieldsBaseInterface} from '../../../common/fields/common/validate-search-fields-base.interface';
import {SearchFieldsBaseComponent} from '../../common/search-fields-base.component';
import {NpiFieldComponent} from '../../../common/fields/npi-field/npi-field.component';
import {NameFieldComponent} from '../../../common/fields/name-field/name-field.component';
import {TaxIdFieldComponent} from '../../../common/fields/tax-id-field/tax-id-field.component';

export interface ProviderPracticeLocationSearchFields {
  npi: string;
  practiceLocation: string;
  taxId: string;
}

@Component({
  selector: 'app-provider-practice-location-search-fields',
  templateUrl: './provider-practice-location-search-fields.component.html',
  styleUrls: ['./provider-practice-location-search-fields.component.scss']
})
export class ProviderPracticeLocationSearchFieldsComponent
  extends SearchFieldsBaseComponent<ProviderPracticeLocationSearchFields>
  implements ValidateSearchFieldsBaseInterface {
  // input fields
  @Input() fields = {
    npi: '',
    practiceLocation: '',
    taxId: '',
  };

  // npi field
  @ViewChild(NpiFieldComponent) npi: NpiFieldComponent;
  // practice location name field
  @ViewChild(NameFieldComponent) practiceLocation: NameFieldComponent;
  // tax id field
  @ViewChild(TaxIdFieldComponent) taxId: TaxIdFieldComponent;

  /**
   * handle entered event
   */
  onEntered() {
    if (this.checkAllValidation()) {
      this.entered.emit();
    }
  }

  checkAllValidation(): boolean {
    let result = true;

    this.fieldList.forEach(item => {
      if (!item.checkValidation()) {
        result = false;
      }
    });

    return result;
  }

  get fieldList() {
    return [
      this.npi,
      this.practiceLocation,
      this.taxId,
    ];
  }
}
