import {Component, EventEmitter, HostBinding, Input, Output} from '@angular/core';
import {OptionItem} from '../../../../models/component/option-item';

@Component({
  selector: 'app-select-field',
  templateUrl: './select-field.component.html',
  styleUrls: ['./select-field.component.scss']
})
export class SelectFieldComponent<T> {
  // label
  @Input() label: string;
  // value
  @Input() appValue: T;
  // options for dropdown
  @Input() options: OptionItem<T>[] = [];
  // error message
  @Input() @HostBinding('class.error') error: string;
  // value change event
  @Output() appValueChange: EventEmitter<T> = new EventEmitter<T>();
}
