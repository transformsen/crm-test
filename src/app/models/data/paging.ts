export interface PagingJson<T> {
  page: number;
  size: number;
  total: number;
  data: T[];
}
