import {EventEmitter, Input, Output} from '@angular/core';
import {OptionItem} from '../../../../models/component/option-item';
import {environment} from '../../../../../environments/environment';

const {
  defaultPageSize,
} = environment;

/**
 * paging change event
 */
export class PagingChangeEvent {
  page: number;
  size: number;

  constructor(page: number, size: number) {
    this.page = page;
    this.size = size;
  }
}

export class PaginatorCommonComponent {
  // page number starts from 0
  @Input() page = 0;
  // size per page
  @Input() size = defaultPageSize;
  // total sizes
  @Input() total = 0;
  // set available size options
  @Input() set sizes(options: number[]) {
    this.sizeOptions = options.map(option => {
      return {
        label: option.toString(),
        value: option,
      };
    });
  }

  // paging change event
  @Output() pagingChange: EventEmitter<PagingChangeEvent> = new EventEmitter<PagingChangeEvent>();

  sizeOptions: OptionItem<number>[] = [
    {
      label: '50',
      value: 50,
    },
    {
      label: '100',
      value: 100,
    },
    {
      label: '150',
      value: 150,
    },
  ];

  hasPrev = false;
  hasNext = false;

  get totalPage() {
    return Math.ceil(this.total / this.size);
  }

  /**
   * to start page
   */
  toStart() {
    if (this.page !== 0) {
      this.emitPageChange(0, this.size);
    }
  }

  /**
   * to next if next page is exists
   */
  toNext() {
    if (this.hasNext) {
      this.emitPageChange(this.page + 1, this.size);
    }
  }

  /**
   * to prev if prev page is exists
   */
  toPrev() {
    if (this.hasPrev) {
      this.emitPageChange(this.page - 1, this.size);
    }
  }

  /**
   * to end page
   */
  toEnd() {
    if (this.page !== this.totalPage - 1) {
      this.emitPageChange(this.totalPage - 1, this.size);
    }
  }

  /**
   * emit page change event
   * @param page page
   * @param size size
   */
  emitPageChange(page: number, size: number) {
    this.pagingChange.emit(new PagingChangeEvent(page, size));
  }

  /**
   * define existence of prev next pages
   */
  protected defineExistenceOfPrevNext() {
    this.hasPrev = this.page !== 0;
    this.hasNext = this.page + 1 < this.totalPage;
  }
}
