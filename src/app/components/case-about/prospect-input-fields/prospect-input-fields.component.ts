import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {CaseAboutFieldsBaseComponent} from '../common/case-about-fields-base.component';
import {ValidateSearchFieldsBaseInterface} from '../../common/fields/common/validate-search-fields-base.interface';
import {SsnFieldComponent} from '../../common/fields/ssn-field/ssn-field.component';

@Component({
  selector: 'app-prospect-input-fields',
  templateUrl: './prospect-input-fields.component.html',
  styleUrls: ['./prospect-input-fields.component.scss']
})
export class ProspectInputFieldsComponent extends CaseAboutFieldsBaseComponent implements ValidateSearchFieldsBaseInterface {
  @Input() fields = {
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
