import { Component } from '@angular/core';
import { BasicCaseAboutBaseComponent } from '../../basic-case-about-item/common/basic-case-about-base.component';
import { ProducerResultJson } from 'src/app/models/data/producer-result';

@Component({
  selector: 'app-basic-producer-case-from',
  templateUrl: './basic-producer-case-from.component.html',
  styleUrls: [
    '../common/basic-case-from-base.component.scss',
    './basic-producer-case-from.component.scss'
  ]
})
export class BasicProducerCaseFromComponent extends BasicCaseAboutBaseComponent<ProducerResultJson> {
  checked = {
    firstName: false,
    lastName: false,
    npn: false
  };
}
