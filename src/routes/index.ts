import { Router } from "express";
import clienteRouter from "./cliente.routes";

const routes = Router();

routes.get("/teste", (request, response) => {
  console.log("Teste aqui !!!");
  return response.json({ message: "Hello Dev!" });
});

// routes.use("/clientes", clienteRouter);

export default routes;
