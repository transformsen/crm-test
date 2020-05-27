import {Component, OnChanges, SimpleChanges} from '@angular/core';
import {PaginatorCommonComponent} from '../common/paginator-common.component';

@Component({
  selector: 'app-modern-paginator',
  templateUrl: './modern-paginator.component.html',
  styleUrls: [
    './modern-paginator.component.scss',
    '../common/paginator-common.component.scss',
  ]
})
export class ModernPaginatorComponent extends PaginatorCommonComponent implements OnChanges {
  // start row index
  start = 0;
  // end row index
  end = 0;

  constructor() {
    super();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setPagination();
  }

  /**
   * set pagination info
   */
  private setPagination() {
    this.setStartEndIndices();
    this.defineExistenceOfPrevNext();
  }

  /**
   * set start / end indices
   */
  private setStartEndIndices() {
    this.start = (this.page * this.size) + 1;
    this.end = Math.min((this.page + 1) * this.size, this.total);
  }
}
