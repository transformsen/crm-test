import { Pipe, PipeTransform } from '@angular/core';
import {getObjectValue} from '../../utils/object.util';

@Pipe({
  name: 'tableRowData'
})
export class TableRowDataPipe<T> implements PipeTransform {
  /**
   * get data with property string from object
   * @param data object to get data
   * @param property property string
   * @example
   * const pipe = new TableRowDataPipe();
   * const data = {
   *   field1: 'Hello',
   *   field2: {
   *     subField1: 'Good Bye',
   *   },
   * };
   *
   * console.log(pipe.transform(data, 'field1')); // 'Hello'
   * console.log(pipe.transform(data, 'field2.subField1')); // 'Good Bye'
   */
  transform(data: T, property: string): any {
    return getObjectValue(data, property);
  }
}
