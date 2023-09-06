import { DataSource, DataSourceOptions } from "typeorm";

export const dataSourceOptions: DataSourceOptions = {
    type: 'mariadb',
    host: 'localhost',
    username: 'root',
    password: 'Elohim#3',
    database: 'harvest_moon',
}

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;