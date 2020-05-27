import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {CaseAboutFieldsBaseComponent} from '../common/case-about-fields-base.component';
import {ValidateSearchFieldsBaseInterface} from '../../common/fields/common/validate-search-fields-base.interface';
import {SsnFieldComponent} from '../../common/fields/ssn-field/ssn-field.component';

@Component({
  selector: 'app-blue-card-input-fields',
  templateUrl: './blue-card-input-fields.component.html',
  styleUrls: ['./blue-card-input-fields.component.scss']
})
export class BlueCardInputFieldsComponent extends CaseAboutFieldsBaseComponent implements ValidateSearchFieldsBaseInterface {
  @Input() fields = {
    id: '',
    firstName: '',
    lastName: '',
    ssn: '',
  };

  // ssn field
  @ViewChild(SsnFieldComponent) ssn: SsnFieldComponent;

  onEntered() {
    if (this.checkAllValidation()) {
      this.entered.emit();
    }
  }

  checkAllValidation(): boolean {
    return this.ssn.checkValidation();
  }
}
