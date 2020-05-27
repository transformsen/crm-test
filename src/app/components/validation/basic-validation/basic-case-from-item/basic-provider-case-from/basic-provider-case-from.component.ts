import {Component} from '@angular/core';
import {BasicCaseFromBaseComponent} from '../common/basic-case-from-base.component';
import {ProviderResultJson} from '../../../../../models/data/provider-result';

@Component({
  selector: 'app-basic-provider-case-from',
  templateUrl: './basic-provider-case-from.component.html',
  styleUrls: [
    '../common/basic-case-from-base.component.scss',
    './basic-provider-case-from.component.scss'
  ]
})
export class BasicProviderCaseFromComponent extends BasicCaseFromBaseComponent<ProviderResultJson> {
  // checked state
  checked = {
    npi: false,
    state: false,
    firstName: false,
    lastName: false
  };

  /**
   * return displayable type
   */
  get displayableType() {
    if (this.type === 'nonContractedProvider') {
      return 'Non-Contracted Provider';
    } else if (this.type === 'provider') {
      return 'Provider';
    }
  }
}
