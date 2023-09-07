import { PersonEntity } from "src/modules/person/person.entity";
import { DataSource, DataSourceOptions } from "typeorm";

export const dataSourceOptions: DataSourceOptions = {
  type: 'mariadb',
  host: 'localhost',
  username: 'root',
  password: 'Elohim#3',
  database: 'harvest_moon',
  entities: [
    PersonEntity,
  ],
  synchronize: true,
  logging: true,
}

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
