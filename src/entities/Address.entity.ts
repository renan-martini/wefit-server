import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from "typeorm";

@Entity("adresses")
export class Address {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  cep: string;

  //logradouro
  @Column()
  publicPlace: string;

  @Column()
  number: number;

  @Column()
  complement: string;

  @Column()
  city: string;

  @Column()
  neighborhood: string;

  @Column()
  state: string;

  @CreateDateColumn()
  createdAt: Date;
}
