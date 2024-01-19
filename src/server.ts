import "reflect-metadata";
import express from "express";
import routes from "./routes";
import { AppDataSource } from "./database/data-source";

const app = express();
app.use(routes);

app.use(express.json());

AppDataSource.initialize().then(async () => {
  console.log("Database OK");
  app.listen(3333, () => {
    console.log("Server started on port 3333");
  });
});
