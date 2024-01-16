import "reflect-metadata";
import express, { Request, Response } from "express";
import routes from "./shared/routes";
import { AppDataSource } from "./data-source";

const app = express();
app.use(routes);

app.use(express.json());

app.listen(3333, () => console.log("Servidor rodando na porta 3333"));
