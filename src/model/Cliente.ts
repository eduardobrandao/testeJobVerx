import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("clientes")
class Cliente {
  @PrimaryGeneratedColumn("increment")
  id: number;
  @Column()
  name: string;
}
export default Cliente;
