export enum EApiMethods {
  CREATE = 'create',
  FIND_ALL = 'find-all',
  FIND_ALL_PAGINATED = 'find-all-paginated',
  FIND_ALL_BY_FILTER_PAGINATED = 'find-all-by-filter-paginated',
  FIND_ONE = 'find-one/:id',
  UPDATE = 'update/:id',
  DELETE = 'delete/:id',
  CHANGE_STATUS = 'change-status/:id',
}
