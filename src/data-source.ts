import { DataSource } from "typeorm";
import "dotenv/config";

const AppDataSource =
  process.env.NODE_ENV === "test"
    ? new DataSource({
        type: "mysql",
        host: "localhost",
        port: +process.env.MYSQLDB_PORT_TEST!,
        username: "root",
        dropSchema: true,
        password: process.env.MYSQLDB_PASSWORD,
        database: process.env.MYSQLDB_DATABASE,
        entities: ["src/entities/*.ts"],
        migrations: ["src/migrations/*.ts"],
      })
    : new DataSource({
        type: "mysql",
        host: "localhost",
        port: +process.env.MYSQLDB_PORT!,
        username: "root",
        password: process.env.MYSQLDB_PASSWORD,
        database: process.env.MYSQLDB_DATABASE,
        synchronize: true,
        entities: ["src/entities/*.ts"],
        migrations: ["src/migrations/*.ts"],
      });

export default AppDataSource;
