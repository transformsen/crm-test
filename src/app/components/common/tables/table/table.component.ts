import { AfterContentInit, Component, ContentChildren, Input, OnDestroy, QueryList } from '@angular/core';
import { TableRow } from '../../../../models/component/table-row';
import { TableColumn } from '../../../../models/component/table-column';
import { CustomBodyCellDirective } from './custom/custom-body-cell.directive';
import { SubscriptionInventory } from '../../../../utils/subscribe.util';
import { TableBaseComponent } from './common/table-base.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent<T> extends TableBaseComponent<T> implements AfterContentInit, OnDestroy {
  // data rows
  @Input() rows: TableRow<T>[] = [];
  // set displayable columns
  // select column will be added on first position
  @Input() set columns(columns: TableColumn[]) {
    this.displayableColumns = [
      new TableColumn('', 'select'),
      ...columns,
    ];
  }
  /// custom body cell directives
  @ContentChildren(CustomBodyCellDirective) readonly customBodyCells: QueryList<CustomBodyCellDirective>;

  // displayable column data
  displayableColumns: TableColumn[] = [];
  // map for custom body cell
  customBodyCellsMap: { [key: string]: CustomBodyCellDirective } = {};

  // subscription inventory
  private inventory: SubscriptionInventory = new SubscriptionInventory();
  // subscription keys for inventory
  private subKeys = {
    bodyChanges: 'bodyChanges',
  };

  ngAfterContentInit(): void {
    this.setCustomBodyCellsMap();
    this.subscribeCustomBodyChanges();
  }

  ngOnDestroy(): void {
    this.inventory.unSubscribeAll();
  }

  /**
   * return properties as array
   */
  get displayableColumnProperties() {
    return this.displayableColumns.map(item => item.property);
  }

  /**
   * return displayable columns without 'select'
   */
  get displayableDataColumns() {
    return this.displayableColumns.filter(item => item.property !== 'select');
  }

  /**
   * handle selection change
   * @param row selected row
   */
  onSelectionChange(row: TableRow<T>) {
    // unselect all
    this.rows.forEach(item => item.selected = false);
    this.rowSelected.emit(row);
  }

  /**
   * custom body cell query list to custom body cells map
   */
  private setCustomBodyCellsMap() {
    this.customBodyCellsMap = {};

    this.customBodyCells
      .forEach(item => {
        this.customBodyCellsMap[item.columnProperty] = item;
      });
  }

  /**
   * subscribe changes for custom body cells
   */
  private subscribeCustomBodyChanges() {
    // unsubscribe stored subscription
    this.inventory.unSubscribe(this.subKeys.bodyChanges);

    const sub = this.customBodyCells
      .changes
      .subscribe({
        // re-create custom body cells map on changes
        next: () => this.setCustomBodyCellsMap(),
      });

    // store subscription
    this.inventory.store(this.subKeys.bodyChanges, sub);
  }

  /**
   * handles the sorting
   * @param column the column
   */
  sort(column) {
    this.sortChanged.emit(column.property);
  }
}
