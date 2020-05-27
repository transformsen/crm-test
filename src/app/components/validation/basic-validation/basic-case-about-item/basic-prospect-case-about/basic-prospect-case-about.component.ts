import { Component, OnInit } from '@angular/core';
import {BasicCaseAboutBaseComponent} from '../common/basic-case-about-base.component';

@Component({
  selector: 'app-basic-prospect-case-about',
  templateUrl: './basic-prospect-case-about.component.html',
  styleUrls: [
    '../common/basic-case-about-base.component.scss',
    './basic-prospect-case-about.component.scss'
  ]
})
export class BasicProspectCaseAboutComponent extends BasicCaseAboutBaseComponent<any> {

}
