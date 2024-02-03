import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Profile } from "./Profile.entity";

@Entity("addresses")
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
  complement?: string;

  @Column()
  city: string;

  @Column()
  neighborhood: string;

  @Column()
  state: string;

  @OneToOne(() => Profile)
  @JoinColumn()
  profile: Profile;

  @CreateDateColumn()
  createdAt: Date;
}
