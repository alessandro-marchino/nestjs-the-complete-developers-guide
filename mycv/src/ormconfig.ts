import { DataSource, DataSourceOptions } from 'typeorm';

let dbConfig: DataSourceOptions;{

};

switch(process.env.NODE_ENV) {
  case 'development':
    dbConfig = {
      synchronize: false,
      type: 'better-sqlite3',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      database: 'db.sqlite'
    }
    break;
  case 'test':
    dbConfig = {
      synchronize: true,
      type: 'better-sqlite3',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      database: ':memory:'
    }
    break;
  case 'production':
    dbConfig = {
      synchronize: false,
      type: 'postgres',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      database: ''
    }
    break;
  default:
    throw new Error('Unknown environment');
}

export const AppDataSource = new DataSource(dbConfig)
