import { getRepository, Repository } from "typeorm";

import { ICreateItemDTO } from "@modules/points/dtos/ICreateItemDTO";
import { IItemRepository } from "@modules/points/repositories/IItemRepository";

import { Item } from "../entities/Item";

class ItemRepository implements IItemRepository {
  private repository: Repository<Item>;

  constructor() {
    this.repository = getRepository(Item);
  }

  async findAll(): Promise<Item[]> {
    const items = await this.repository.find();

    return items;
  }

  async create(data: ICreateItemDTO): Promise<void> {
    throw new Error("Method not implemented.");
  }
}

export { ItemRepository };
