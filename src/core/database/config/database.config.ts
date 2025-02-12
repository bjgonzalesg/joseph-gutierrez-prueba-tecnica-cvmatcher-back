import { envs } from 'src//core/config';
import 'dotenv/config';
import { DatabaseConfigI } from '../interfaces/database.interface';

export const databaseConfig: DatabaseConfigI = {
  development: {
    dialect: envs.dbDialect,
    host: envs.dbHost,
    port: envs.dbPort,
    username: envs.dbUser,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME_DEVELOPMENT,
    migrationStorageTableName: envs.dbMigrationTable,
  },
  test: {
    dialect: envs.dbDialect,
    host: envs.dbHost,
    port: envs.dbPort,
    username: envs.dbUser,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME_DEVELOPMENT,
    migrationStorageTableName: envs.dbMigrationTable,
  },
  production: {
    dialect: envs.dbDialect,
    host: envs.dbHost,
    username: envs.dbUser,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME_DEVELOPMENT,
    migrationStorageTableName: envs.dbMigrationTable,
  },
};
