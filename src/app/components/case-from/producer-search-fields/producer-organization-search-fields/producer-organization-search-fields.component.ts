import {Component, Input, ViewChild} from '@angular/core';
import {SearchFieldsBaseComponent} from '../../common/search-fields-base.component';
import {ValidateSearchFieldsBaseInterface} from '../../../common/fields/common/validate-search-fields-base.interface';
import {NameFieldComponent} from '../../../common/fields/name-field/name-field.component';

export interface ProducerOrganizationSearchFields {
  orgId: string;
  orgName: string;
}

@Component({
  selector: 'app-producer-organization-search-fields',
  templateUrl: './producer-organization-search-fields.component.html',
  styleUrls: ['./producer-organization-search-fields.component.scss']
})
export class ProducerOrganizationSearchFieldsComponent
  extends SearchFieldsBaseComponent<ProducerOrganizationSearchFields>
  implements ValidateSearchFieldsBaseInterface {

  // fields
  @Input() fields: ProducerOrganizationSearchFields = {
    orgName: '',
    orgId: '',
  };

  // organization id field
  @ViewChild('orgId') orgId: NameFieldComponent;
  // organization name field
  @ViewChild('orgName') orgName: NameFieldComponent;

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
      this.orgName,
      this.orgId,
    ];
  }
}
