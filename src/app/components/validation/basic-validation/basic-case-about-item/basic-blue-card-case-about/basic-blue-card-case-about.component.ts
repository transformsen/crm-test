import { Component, OnInit } from '@angular/core';
import {BasicCaseAboutBaseComponent} from '../common/basic-case-about-base.component';

@Component({
  selector: 'app-basic-blue-card-case-about',
  templateUrl: './basic-blue-card-case-about.component.html',
  styleUrls: [
    '../common/basic-case-about-base.component.scss',
    './basic-blue-card-case-about.component.scss'
  ]
})
export class BasicBlueCardCaseAboutComponent extends BasicCaseAboutBaseComponent<any> {

}
