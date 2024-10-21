import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";

import { Point } from "./Point";

@Entity("items")
class Item {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  title: string;

  @Column()
  image: string;

  @ManyToMany(() => Point, (point) => point.items)
  points: Point[];

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

export { Item };
