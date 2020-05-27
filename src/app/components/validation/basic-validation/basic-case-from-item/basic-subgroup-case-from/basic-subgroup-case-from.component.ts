import { Component } from '@angular/core';
import { BasicCaseAboutBaseComponent } from '../../basic-case-about-item/common/basic-case-about-base.component';
import { GroupResultJson } from 'src/app/models/data/group-result';

@Component({
  selector: 'app-basic-subgroup-case-from',
  templateUrl: './basic-subgroup-case-from.component.html',
  styleUrls: [
    '../common/basic-case-from-base.component.scss',
    './basic-subgroup-case-from.component.scss'
  ]
})
export class BasicSubgroupCaseFromComponent extends BasicCaseAboutBaseComponent<GroupResultJson> {
  checked = {
    groupName: false,
    groupId: false,
    subGroupId: false
  };
}
