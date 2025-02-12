import { Job } from 'src//modules/jobs/entities/job.entity';
import { Role } from 'src//modules/roles/role.entity';
import { User } from 'src//modules/users/user.entity';
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
        dialectModule: require('pg'),
      });

      sequelize.addModels([User, Role, Job]);

      return sequelize;
    },
  },
];
