/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const dotenv = require('dotenv');
const { join } = require('path');

//! EN CASO EL ARCHIVO config.js NO SE ENCUENTRE EN LA CARPETA RAIZ
dotenv.config({ path: join(__dirname, '../../../../.env') });

module.exports = {
  development: {
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME_DEVELOPMENT,
    migrationStorageTableName: process.env.DB_MIGRATION_TABLE,
  },
  test: {
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME_DEVELOPMENT,
    migrationStorageTableName: process.env.DB_MIGRATION_TABLE,
  },
  production: {
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME_DEVELOPMENT,
    migrationStorageTableName: process.env.DB_MIGRATION_TABLE,
  },
};
