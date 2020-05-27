import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-search-controllers',
  templateUrl: './search-controllers.component.html',
  styleUrls: ['./search-controllers.component.scss']
})
export class SearchControllersComponent {
  // search disabled state
  @Input() searchDisabled = false;
  // clear clicked event
  @Output() clearClicked: EventEmitter<void> = new EventEmitter<void>();
  // search clicked event
  @Output() searchClicked: EventEmitter<void> = new EventEmitter<void>();
}
