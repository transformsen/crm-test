import {EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Store} from '@ngrx/store';
import {setCaseAboutSearchFields} from '../../../stores/case-about-store/case-about-store.actions';
import * as _ from 'lodash';

export class CaseAboutFieldsBaseComponent implements OnInit {
  // fields
  @Input() fields: any = {};
  // entered event
  @Output() entered: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    protected store: Store,
  ) {
  }

  ngOnInit(): void {
    // set initial state of fields
    this.setFieldsToStore();
  }

  /**
   * set fields to store
   */
  protected setFieldsToStore() {
    this.store.dispatch(setCaseAboutSearchFields({fields: _.cloneDeep(this.fields) as any}));
  }

  /**
   * update fields and set to store
   * @param name field name
   * @param value changed value
   */
  onFieldChange(name: string, value: string) {
    this.fields[name] = value;
    this.setFieldsToStore();
  }

  /**
   * handle entered
   */
  onEntered() {
    this.entered.emit();
  }
}
