import { DataSourceOptions } from 'typeorm';
import { entities } from './entities';

export const Excalibur: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'jgraham',
  password: 'D3v3l0p@',
  database: 'excalibur',
  synchronize: false,
  logging: false,
  entities: entities,
  subscribers: [],
  migrations: [],
};
