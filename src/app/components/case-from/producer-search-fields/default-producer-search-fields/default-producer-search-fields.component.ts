import {Component, Input, ViewChild} from '@angular/core';
import {SearchFieldsBaseComponent} from '../../common/search-fields-base.component';
import {ValidateSearchFieldsBaseInterface} from '../../../common/fields/common/validate-search-fields-base.interface';
import {NameFieldComponent} from '../../../common/fields/name-field/name-field.component';
import {NpnFieldComponent} from '../../../common/fields/npn-field/npn-field.component';

export interface DefaultProducerSearchFields {
  npn: string;
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-default-producer-search-fields',
  templateUrl: './default-producer-search-fields.component.html',
  styleUrls: ['./default-producer-search-fields.component.scss']
})
export class DefaultProducerSearchFieldsComponent
  extends SearchFieldsBaseComponent<DefaultProducerSearchFields>
  implements ValidateSearchFieldsBaseInterface {

  @Input() fields: DefaultProducerSearchFields = {
    npn: '',
    firstName: '',
    lastName: '',
  };

  // npn field
  @ViewChild(NpnFieldComponent) npn: NpnFieldComponent;
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
      this.npn,
      this.lastName,
      this.firstName,
    ];
  }
}
