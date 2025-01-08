export interface IPaginationProps<T> {
  total: number;
  page: number;
  limit: number;
  apiRoute: string;
  apiMethod: string;
  extraQueries?: object | null;
  extraParams?: string[];
  rows: T[];
}
