import {EventEmitter, Input, Output} from '@angular/core';

export class ButtonBaseComponent {
  // button width
  @Input() width: number;
  // button height
  @Input() height: number;
  // button disabled state
  @Input() disabled = false;
  // button clicked event
  @Output() buttonClicked: EventEmitter<void> = new EventEmitter<void>();
}
