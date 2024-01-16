import ClienteService from "../service/ClienteService";
import { Request, Response } from "express";

export default class ClienteController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;
    console.log(request, "AQUI");
    const service = new ClienteService();

    const cliente = await service.salve({ name });
    return response.status(201).json(cliente);
  }

  public async listar(request: Request, response: Response): Promise<Response> {
    return response.status(201).json("Oi Landson !!!");
  }
}
