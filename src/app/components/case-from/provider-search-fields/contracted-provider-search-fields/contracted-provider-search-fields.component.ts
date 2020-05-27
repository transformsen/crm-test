import {Component, Input, ViewChild} from '@angular/core';
import {ValidateSearchFieldsBaseInterface} from '../../../common/fields/common/validate-search-fields-base.interface';
import {NpiFieldComponent} from '../../../common/fields/npi-field/npi-field.component';
import {TaxIdFieldComponent} from '../../../common/fields/tax-id-field/tax-id-field.component';
import {NameFieldComponent} from '../../../common/fields/name-field/name-field.component';
import {SearchFieldsBaseComponent} from '../../common/search-fields-base.component';

export interface ContractedProviderSearchFields {
  npi: string;
  firstName: string;
  lastName: string;
  taxId: string;
}

@Component({
  selector: 'app-contracted-provider-search-fields',
  templateUrl: './contracted-provider-search-fields.component.html',
  styleUrls: ['./contracted-provider-search-fields.component.scss']
})
export class ContractedProviderSearchFieldsComponent
  extends SearchFieldsBaseComponent<ContractedProviderSearchFields>
  implements ValidateSearchFieldsBaseInterface {

  // fields for contracted provider search
  @Input() fields: ContractedProviderSearchFields = {
    npi: '',
    firstName: '',
    lastName: '',
    taxId: '',
  };

  // npi field
  @ViewChild(NpiFieldComponent) npi: NpiFieldComponent;
  // tax id field
  @ViewChild(TaxIdFieldComponent) taxId: TaxIdFieldComponent;
  // first name field
  @ViewChild('firstName') firstName: NameFieldComponent;
  // last name field
  @ViewChild('lastName') lastName: NameFieldComponent;

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
      this.taxId,
      this.lastName,
      this.firstName,
    ];
  }
}
