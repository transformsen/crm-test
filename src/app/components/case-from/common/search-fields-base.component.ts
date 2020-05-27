import {EventEmitter, Input, OnInit, Output} from '@angular/core';

export class SearchFieldsBaseComponent<T> implements OnInit {
  // fields for contracted provider search
  @Input() fields: T;
  // entered event
  @Output() entered: EventEmitter<void> = new EventEmitter<void>();
  // fields changed event
  @Output() fieldsChanged: EventEmitter<T> = new EventEmitter<T>();

  ngOnInit(): void {
    this.emitFieldsChanged();
  }

  /**
   * emit fields changed event
   */
  emitFieldsChanged() {
    this.fieldsChanged.emit(this.fields);
  }

  /**
   * handle field value change
   * @param field target field
   * @param value changed value
   */
  onFieldChange(field: string, value: string) {
    this.fields[field] = value;
    this.emitFieldsChanged();
  }
}
