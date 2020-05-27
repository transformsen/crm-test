import { Component, OnInit } from '@angular/core';
import {BasicCaseAboutBaseComponent} from '../common/basic-case-about-base.component';
import {GroupResultJson} from '../../../../../models/data/group-result';

@Component({
  selector: 'app-basic-subgroup-case-about',
  templateUrl: './basic-subgroup-case-about.component.html',
  styleUrls: [
    '../common/basic-case-about-base.component.scss',
    './basic-subgroup-case-about.component.scss'
  ]
})
export class BasicSubgroupCaseAboutComponent extends BasicCaseAboutBaseComponent<GroupResultJson> {
  checked = {
    groupName: false,
    groupId: false,
    subGroupId: false,
  };
}
