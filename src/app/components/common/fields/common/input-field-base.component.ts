import { EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { isValidString } from '../../../../utils/validation.util';

export type AppInputFieldType = 'number' | 'text' | 'date' | 'ssn' | 'tax';

export class InputFieldBaseComponent<T = string> implements OnChanges {
  // value
  @Input() appValue: T;
  // label for field
  @Input() label: string;
  // hint for field
  @Input() hint: string;
  // disabled state
  @Input() disabled = false;
  // input type
  @Input() type: AppInputFieldType;
  // max length
  @Input() max: number;
  // required flag
  @Input() required: boolean;
  // enter pressed
  @Output() entered: EventEmitter<T> = new EventEmitter<T>();
  // force entered event
  // emitted regardless to validation
  @Output() forceEntered: EventEmitter<void> = new EventEmitter<void>();
  // value change event
  @Output() appValueChange: EventEmitter<T> = new EventEmitter<T>();

  // error message
  error: string;

  ngOnChanges(): void {
    if (!isValidString(this.appValue as any) && !this.required) {
      this.error = null;
    }
  }

  /**
   * handle value change
   * @param value changed value
   */
  onValueChange(value: T) {
    // remove error
    this.error = null;
    this.appValueChange.emit(value);
  }
}
