import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("cliente")
class Cliente {
  @PrimaryGeneratedColumn("increment")
  id!: number;
  @Column()
  name!: string;
}
export default Cliente;
