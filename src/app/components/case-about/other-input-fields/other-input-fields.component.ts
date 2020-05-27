import {Component, Input} from '@angular/core';
import {CaseAboutFieldsBaseComponent} from '../common/case-about-fields-base.component';
import {ValidateSearchFieldsBaseInterface} from '../../common/fields/common/validate-search-fields-base.interface';

@Component({
  selector: 'app-other-input-fields',
  templateUrl: './other-input-fields.component.html',
  styleUrls: ['./other-input-fields.component.scss']
})
export class OtherInputFieldsComponent extends CaseAboutFieldsBaseComponent implements ValidateSearchFieldsBaseInterface {
  @Input() fields = {
    information: '',
  };

  checkAllValidation(): boolean {
    return true;
  }
}
