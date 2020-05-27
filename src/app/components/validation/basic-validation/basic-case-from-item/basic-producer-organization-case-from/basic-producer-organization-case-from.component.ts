import { Component } from '@angular/core';
import {BasicCaseAboutBaseComponent} from '../../basic-case-about-item/common/basic-case-about-base.component';
import {ProducerResultJson} from '../../../../../models/data/producer-result';

@Component({
  selector: 'app-basic-producer-organization-case-from',
  templateUrl: './basic-producer-organization-case-from.component.html',
  styleUrls: [
    '../common/basic-case-from-base.component.scss',
    './basic-producer-organization-case-from.component.scss'
  ]
})
export class BasicProducerOrganizationCaseFromComponent extends BasicCaseAboutBaseComponent<ProducerResultJson> {
  checked = {
    producerOrgId: false,
    producerOrgName: false,
  };
}
