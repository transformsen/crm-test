import { Component } from '@angular/core';
import {BasicCaseFromBaseComponent} from '../common/basic-case-from-base.component';

@Component({
  selector: 'app-basic-other-case-from',
  templateUrl: './basic-other-case-from.component.html',
  styleUrls: [
    '../common/basic-case-from-base.component.scss',
    './basic-other-case-from.component.scss'
  ]
})
export class BasicOtherCaseFromComponent extends BasicCaseFromBaseComponent<{callerName: string, callbackNumber: string}> {
}
