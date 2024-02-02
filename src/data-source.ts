import { DataSource } from "typeorm";
import "dotenv/config";

const AppDataSource = new DataSource(
  process.env.NODE_ENV === "test"
    ? {
        type: "sqlite",
        database: ":memory:",
        synchronize: true,
        entities: ["src/entities/**/*.ts"],
      }
    : {
        type: "mysql",
        host: "localhost",
        port: +process.env.MYSQLDB_PORT!,
        username: "root",
        password: process.env.MYSQLDB_PASSWORD,
        database: process.env.MYSQLDB_DATABASE,
        logging: true,
        synchronize: true,
        entities: ["src/entities/*.ts"],
        migrations: ["src/migrations/*.ts"],
      }
);

export default AppDataSource;
