import {TableBaseComponent} from './table-base.component';
import {TableRow} from '../../../../../models/component/table-row';
import {Input, OnChanges, OnDestroy} from '@angular/core';

export class DataTableBaseComponent<T> extends TableBaseComponent<T> implements OnChanges, OnDestroy {
  // selected row
  @Input() selectedRow: T;
  // create table row to set rows
  @Input() set data(data: T[]) {
    this.rows = data.map(item => new TableRow<T>(item));
  }

  // table rows
  rows: TableRow<T>[] = [];
  // timer for timeout
  private timer;

  ngOnChanges(): void {
    this.clearAllSelection();
    this.setRowSelected();
    this.setFirstRowSelected();
  }

  ngOnDestroy(): void {
    clearTimeout(this.timer);
  }

  /**
   * clear all selection from rows
   */
  protected clearAllSelection() {
    this.rows.forEach(row => row.selected = false);
  }

  /**
   * set row selected
   */
  protected setRowSelected() {
    if (this.selectedRow) {
      this.rows.forEach(row => {
        if ((row.data as any).id === (this.selectedRow as any).id) {
          row.selected = true;
        }
      });
    }
  }

  /**
   * set first row when only one row is exists
   */
  protected setFirstRowSelected() {
    if (!this.selectedRow && this.page === 0 && this.rows.length === 1) {
      clearTimeout(this.timer);

      this.timer = setTimeout(() => {
        this.rowSelected.emit(this.rows[0]);
      });
    }
  }
}
