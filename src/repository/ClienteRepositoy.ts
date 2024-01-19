import { AppDataSource } from "../database/data-source";
import Cliente from "../model/Cliente";

const clienteRepositoy = AppDataSource.getRepository(Cliente);

const createCliente = (cliente: Cliente): Promise<Cliente> => {
  return clienteRepositoy.save(cliente);
};

export { createCliente };
