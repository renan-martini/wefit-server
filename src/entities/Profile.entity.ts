import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Address } from "./Address.entity";

export enum ProfileType {
  PJ = "pj",
  PF = "pf",
}

@Entity("profiles")
export class Profile {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "enum", enum: ProfileType })
  profileType: ProfileType;

  @Column()
  cnpj?: string;

  @Column()
  cpf: string;

  @Column()
  name: string;

  @Column()
  cellphone: string;

  @Column()
  phoneNumber: string;

  @Column()
  email: string;

  @OneToOne(() => Address)
  @JoinColumn()
  address: Address;

  @CreateDateColumn()
  createdAt: Date;
}
