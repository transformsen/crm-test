import {Component, EventEmitter, Input, Output} from '@angular/core';
import {environment} from '../../../../../environments/environment';
import * as _ from 'lodash';
import {OptionItem} from '../../../../models/component/option-item';

const {
  stateOptions,
} = environment;

@Component({
  selector: 'app-state-field',
  templateUrl: './state-field.component.html',
  styleUrls: ['./state-field.component.scss']
})
export class StateFieldComponent {
  // label
  @Input() label = 'State';
  // error message
  @Input() error: string;
  // value
  @Input() appValue: string;
  // value change event
  @Output() appValueChange: EventEmitter<string> = new EventEmitter<string>();

  // state options
  options: OptionItem<string>[] = _.cloneDeep(stateOptions);
}
