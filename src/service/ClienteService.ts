import { getCustomRepository } from "typeorm";
import { createCliente } from "../repository/ClienteRepositoy";
import Cliente from "../entities/Cliente";

class ClienteService {
  public async salve({ name }): Promise<Cliente | null> {
    var cliente = new Cliente();
    cliente.name = name;
    const respository = createCliente(cliente);
    return cliente;
  }
}

export default ClienteService;
