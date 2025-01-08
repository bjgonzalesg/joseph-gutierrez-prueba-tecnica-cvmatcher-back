export interface DatabaseConfigAttributesI {
  dialect?: string;
  host?: string;
  port?: number | string;
  username?: string;
  password?: string;
  database?: string;
  migrationStorageTableName?: string;
}

export interface DatabaseConfigI {
  development: DatabaseConfigAttributesI;
  test: DatabaseConfigAttributesI;
  production: DatabaseConfigAttributesI;
}
