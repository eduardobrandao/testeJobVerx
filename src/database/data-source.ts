import { DataSource } from "typeorm";
import { CreateClienteTable1705367279774 } from "./migrations/1705367279774-CreateClienteTable";
import Cliente from "../entities/Cliente";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "docker",
  database: "postgres",
  synchronize: true,
  logging: true,
  entities: [Cliente],
  subscribers: [],
  migrations: [CreateClienteTable1705367279774],
});
