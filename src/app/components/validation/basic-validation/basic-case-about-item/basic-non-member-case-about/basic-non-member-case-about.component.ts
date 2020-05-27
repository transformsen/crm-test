import { Component, OnInit } from '@angular/core';
import {BasicCaseAboutBaseComponent} from '../common/basic-case-about-base.component';

@Component({
  selector: 'app-basic-non-member-case-about',
  templateUrl: './basic-non-member-case-about.component.html',
  styleUrls: [
    '../common/basic-case-about-base.component.scss',
    './basic-non-member-case-about.component.scss',
  ]
})
export class BasicNonMemberCaseAboutComponent extends BasicCaseAboutBaseComponent<{nonMemberId: string}> {
  checked = {
    nonMemberId: false,
  };
}
