import { Router } from "express";
import ClienteController from "../controller/ClienteController";

const clienteRouter = Router();
const clienteController = new ClienteController();

clienteRouter.get("/", clienteController.listar);
//clienteRouter.post("/create", clienteController.create);

export default clienteRouter;
