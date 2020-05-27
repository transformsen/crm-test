import { Component } from '@angular/core';
import {BasicCaseAboutBaseComponent} from '../common/basic-case-about-base.component';
import {ProviderResultJson} from '../../../../../models/data/provider-result';

@Component({
  selector: 'app-provider-practice-location-case-about',
  templateUrl: './provider-practice-location-case-about.component.html',
  styleUrls: [
    '../common/basic-case-about-base.component.scss',
    './provider-practice-location-case-about.component.scss',
  ]
})
export class ProviderPracticeLocationCaseAboutComponent extends BasicCaseAboutBaseComponent<ProviderResultJson> {
  checked = {
    practiceLocation: false,
    npi: false,
    taxId: false,
  };
}
