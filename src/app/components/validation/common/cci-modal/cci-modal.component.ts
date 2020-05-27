import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-cci-modal',
  templateUrl: './cci-modal.component.html',
  styleUrls: ['./cci-modal.component.scss']
})
export class CciModalComponent {
  // cci contents
  @Input() cci: {content: string}[] = [];
  // confirm clicked event
  @Output() confirmClicked: EventEmitter<void> = new EventEmitter<void>();
}
