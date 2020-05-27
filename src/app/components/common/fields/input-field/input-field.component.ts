import {Component, ElementRef, HostBinding, Input, ViewChild} from '@angular/core';
import {InputFieldBaseComponent} from '../common/input-field-base.component';
import {getElement} from '../../../../utils/element.util';

export type AppInputFieldTheme = 'default' | 'white';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent extends InputFieldBaseComponent {
  // theme for input field
  @Input() theme: AppInputFieldTheme = 'default';
  // error message
  @Input() @HostBinding('class.error') error: string;
  // input element child
  @ViewChild('input') input: ElementRef<HTMLInputElement>;
  // set class for white theme
  @HostBinding('class.crm-input-field-white-theme') get isWhiteTheme() {
    return this.theme === 'white';
  }

  /**
   * handle value changed event
   * @param value value
   */
  onValueChange(value: string) {
    const input = getElement(this.input);

    switch (this.type) {
      case 'number': {
        value = value.replace(/\D+/gm, '');

        break;
      }

      case 'date': {
        value = value.replace(/\D+/gm, '');

        const list = value.substr(0, 8).split('');

        if (list.length > 5) {
          list.splice(4, 0, '/');
        }

        if (list.length > 3) {
          list.splice(2, 0, '/');
        }

        value = list.join('');

        break;
      }

      case 'ssn': {
        value = value.replace(/\D+/gm, '');

        const list = value.substr(0, 9).split('');

        if (list.length > 6) {
          list.splice(5, 0, '-');
        }

        if (list.length > 4) {
          list.splice(3, 0, '-');
        }

        value = list.join('');

        break;
      }

      case 'tax': {
        value = value.replace(/\D+/gm, '');

        const list = value.substr(0, 9).split('');

        if (list.length > 3) {
          list.splice(2, 0, '-');
        }

        value = list.join('');

        break;
      }

      default: {
        break;
      }
    }

    input.value = value;

    this.appValueChange.emit(value);
  }

  /**
   * set focus to input
   */
  focus() {
    const el = getElement(this.input);

    if (el) {
      el.focus();
    }
  }
}
