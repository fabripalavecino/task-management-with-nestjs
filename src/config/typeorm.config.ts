import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'h3llodarkne55',
  database: 'taskmanagement',
  autoLoadEntities: true,
  synchronize: true,
};
