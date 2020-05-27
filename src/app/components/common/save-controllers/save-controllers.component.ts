import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-save-controllers',
  templateUrl: './save-controllers.component.html',
  styleUrls: ['./save-controllers.component.scss']
})
export class SaveControllersComponent {
  // save button disabled state
  @Input() saveDisabled = false;
  // save clicked event
  @Output() saveClicked: EventEmitter<void> = new EventEmitter<void>();
  // clear clicked event
  @Output() clearClicked: EventEmitter<void> = new EventEmitter<void>();
}
