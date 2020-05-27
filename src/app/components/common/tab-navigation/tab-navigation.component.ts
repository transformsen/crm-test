import {TabItem} from '../../../models/component/tab-item';
import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-tab-navigation',
  templateUrl: './tab-navigation.component.html',
  styleUrls: ['./tab-navigation.component.scss']
})
export class TabNavigationComponent {
  // tabs for navigation
  @Input() tabs: TabItem[] = [
    new TabItem('case from', '/case-from'),
    new TabItem('case about', '/case-about'),
  ];

  // tab clicked event
  // emit link
  @Output() tabClicked: EventEmitter<string> = new EventEmitter<string>();
}
