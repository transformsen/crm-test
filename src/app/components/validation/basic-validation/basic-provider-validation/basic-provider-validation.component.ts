import {Component, Input} from '@angular/core';
import {AppCaseFromItemType} from '../../../../stores/case-from-store/case-from-store.reducer';
import {AppCaseAboutItemType} from '../../../../stores/case-about-store/case-about-store.reducer';

@Component({
  selector: 'app-basic-provider-validation',
  templateUrl: './basic-provider-validation.component.html',
  styleUrls: ['./basic-provider-validation.component.scss']
})
export class BasicProviderValidationComponent {
  // case from item type
  @Input() caseFromType: AppCaseFromItemType;
  // case about item type
  @Input() caseAboutType: AppCaseAboutItemType;
  // case from item
  @Input() caseFrom: any;
  // case about item
  @Input() caseAbout: any;
}
