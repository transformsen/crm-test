import { Component } from '@angular/core';
import {BasicCaseAboutBaseComponent} from '../common/basic-case-about-base.component';
import {ProducerResultJson} from '../../../../../models/data/producer-result';
import * as _ from 'lodash';

@Component({
  selector: 'app-basic-producer-case-about',
  templateUrl: './basic-producer-case-about.component.html',
  styleUrls: [
    '../common/basic-case-about-base.component.scss',
    './basic-producer-case-about.component.scss'
  ]
})
export class BasicProducerCaseAboutComponent extends BasicCaseAboutBaseComponent<ProducerResultJson> {
  checked = {
    firstName: false,
    lastName: false,
    npn: false,
  };

  /**
   * override toggle selection
   * @param field selected field
   */
  toggleSelection(field: string) {
    if (field === 'firstName' || field === 'lastName') {
      this.toggleNameField(field);
    } else {
      const index = this.selections.indexOf(field);

      if (index !== -1) {
        this.selections.splice(index, 1);
      } else {
        this.selections.push(field);
      }
    }

    // clone to trigger changes
    this.selections = _.cloneDeep(this.selections);
  }
}
