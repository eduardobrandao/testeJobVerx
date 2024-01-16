import { AppDataSource } from "../data-source";
import Cliente from "../model/Cliente";

const clienteRepositoy = AppDataSource.getMongoRepository(Cliente);

const createCliente = (cliente: Cliente): Promise<Cliente> => {
  return clienteRepositoy.save(cliente);
};

export { createCliente };
