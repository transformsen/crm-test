import { Component, OnInit } from '@angular/core';
import {BasicCaseAboutBaseComponent} from '../common/basic-case-about-base.component';

@Component({
  selector: 'app-basic-other-case-about',
  templateUrl: './basic-other-case-about.component.html',
  styleUrls: [
    '../common/basic-case-about-base.component.scss',
    './basic-other-case-about.component.scss'
  ]
})
export class BasicOtherCaseAboutComponent extends BasicCaseAboutBaseComponent<any> {

}
