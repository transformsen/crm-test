export class TableRow<T> {
  data: T;
  selected = false;

  constructor(data: T) {
    this.data = data;
  }
}
