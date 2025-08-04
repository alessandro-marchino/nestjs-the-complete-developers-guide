import { DataSource } from 'typeorm';

let dbConfig: any = {
  synchronize: false,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  migrations: [ __dirname + '/migrations/*.ts' ],
  cli: {
    migrationsDir: 'migrations'
  }
};

switch(process.env.NODE_ENV) {
  case 'development':
    dbConfig.type = 'better-sqlite3';
    dbConfig.database = 'db.sqlite';
    break;
  case 'test':
    dbConfig.synchronize = true;
    dbConfig.type = 'better-sqlite3';
    dbConfig.database = ':memory:';
    break;
  case 'production':
    dbConfig.type = 'postgres';
    dbConfig.database = '';
    break;
  default:
    throw new Error('Unknown environment');
}

export const AppDataSource = new DataSource(dbConfig)
export default dbConfig;
