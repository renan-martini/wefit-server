import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToOne,
  JoinColumn,
  Index,
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

  @Column({ unique: true, nullable: true, type: "varchar", length: 255 })
  cnpj?: string | null;

  @Column({ unique: true })
  cpf: string;

  @Column()
  name: string;

  @Column()
  cellphone: string;

  @Column()
  phoneNumber: string;

  @Column({ unique: true })
  email: string;

  @CreateDateColumn()
  createdAt: Date;
}
