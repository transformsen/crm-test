import { Component, OnInit } from '@angular/core';
import {BasicCaseAboutBaseComponent} from '../../basic-case-about-item/common/basic-case-about-base.component';
import {GroupResultJson} from '../../../../../models/data/group-result';

@Component({
  selector: 'app-basic-group-case-from',
  templateUrl: './basic-group-case-from.component.html',
  styleUrls: [
    '../common/basic-case-from-base.component.scss',
    './basic-group-case-from.component.scss'
  ]
})
export class BasicGroupCaseFromComponent extends BasicCaseAboutBaseComponent<GroupResultJson> {
  checked = {
    groupName: false,
    groupId: false,
  };
}
