import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity("clientes")
class Cliente {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column("varchar", { legthn: 100, nullable: false })
  name: string;
}

export default Cliente;
