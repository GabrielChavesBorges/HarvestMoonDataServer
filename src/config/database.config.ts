import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class DatabaseConfig implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: "mariadb",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "Elohim#3",
      database: "harvest_moon",
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
      keepConnectionAlive: true,
    };
  }
}
