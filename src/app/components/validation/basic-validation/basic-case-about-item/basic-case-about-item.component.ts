import {Component, Input} from '@angular/core';
import {AppCaseAboutItemType} from '../../../../stores/case-about-store/case-about-store.reducer';

@Component({
  selector: 'app-basic-case-about-item',
  templateUrl: './basic-case-about-item.component.html',
  styleUrls: ['./basic-case-about-item.component.scss']
})
export class BasicCaseAboutItemComponent {
  // case about item type
  @Input() type: AppCaseAboutItemType;
  // case about data
  @Input() data: any;
}
