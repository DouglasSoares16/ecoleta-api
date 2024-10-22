import { getRepository, Repository } from "typeorm";

import { ICreateItemDTO } from "@modules/points/dtos/ICreateItemDTO";
import { IItemRepository } from "@modules/points/repositories/IItemRepository";

import { Item } from "../entities/Item";

class ItemRepository implements IItemRepository {
  private repository: Repository<Item>;

  constructor() {
    this.repository = getRepository(Item);
  }

  async findByIds(items_ids: string[]): Promise<Item[]> {
    const items = await this.repository.findByIds(items_ids);

    return items;
  }

  async findAll(): Promise<Item[]> {
    const items = await this.repository.find();

    return items;
  }

  async create(data: ICreateItemDTO): Promise<void> {
    const point = this.repository.create(data);

    await this.repository.save(point);
  }
}

export { ItemRepository };
