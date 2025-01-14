import { DocumentType } from '@/modules/document-type/document-type.entity';
import { Person } from '@/modules/people/entities/person.entity';
import { Role } from '@/modules/roles';
import { User } from '@/modules/users/entities/user.entity';
import { Sequelize } from 'sequelize-typescript';
import { DEVELOPMENT, PRODUCTION, SEQUELIZE, TEST } from '../constants';
import { databaseConfig } from './config/database.config';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config: any;
      switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
          config = databaseConfig.development;
          break;
        case TEST:
          config = databaseConfig.test;
          break;
        case PRODUCTION:
          config = databaseConfig.production;
          break;
        default:
          config = databaseConfig.development;
      }
      const sequelize = new Sequelize({
        ...config,
        define: { freezeTableName: true },
      });

      sequelize.addModels([User, Role, Person, DocumentType]);

      return sequelize;
    },
  },
];
