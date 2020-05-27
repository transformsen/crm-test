import { EventEmitter, Input, Output } from '@angular/core';
import { PagingChangeEvent } from '../../../paginator/common/paginator-common.component';
import { TableRow } from '../../../../../models/component/table-row';

export class TableBaseComponent<T> {
  // page number
  @Input() page = 0;
  // size
  @Input() size = 10;
  // total rows
  @Input() total = 0;
  // paging changed event
  @Output() pagingChanged: EventEmitter<PagingChangeEvent> = new EventEmitter<PagingChangeEvent>();
  // row selected event
  @Output() rowSelected: EventEmitter<TableRow<T>> = new EventEmitter<TableRow<T>>();
  // sorting event
  @Output() sortChanged: EventEmitter<string> = new EventEmitter<string>();
}
