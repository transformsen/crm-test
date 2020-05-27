import { Component } from '@angular/core';
import {BasicCaseAboutBaseComponent} from '../common/basic-case-about-base.component';
import {ProviderResultJson} from '../../../../../models/data/provider-result';

@Component({
  selector: 'app-basic-contracted-provider-case-about',
  templateUrl: './basic-contracted-provider-case-about.component.html',
  styleUrls: [
    '../common/basic-case-about-base.component.scss',
    './basic-contracted-provider-case-about.component.scss'
  ]
})
export class BasicContractedProviderCaseAboutComponent extends BasicCaseAboutBaseComponent<ProviderResultJson> {
  checked = {
    npi: false,
    state: false,
  };
}
