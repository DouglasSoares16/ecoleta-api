import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";

import { Item } from "./Item";

@Entity("points")
class Point {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  whatsapp: string;

  @Column()
  image: string;

  @Column()
  city: string;

  @Column({ type: "char", length: 2 })
  uf: string;

  @Column("decimal", { precision: 9, scale: 6 })
  latitude: number;

  @Column("decimal", { precision: 9, scale: 6 })
  longitude: number;

  @ManyToMany(() => Item, (item) => item.points)
  items: Item[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Point };
