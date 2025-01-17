import { classToPlain } from "class-transformer";
import { inject, injectable } from "tsyringe";

import { Item } from "@modules/points/infra/typeorm/entities/Item";
import { IItemRepository } from "@modules/points/repositories/IItemRepository";

@injectable()
class ListItemsUseCase {
  constructor(
    @inject("ItemRepository")
    private itemRepository: IItemRepository
  ) {}

  async execute(): Promise<Item[]> {
    const items = await this.itemRepository.findAll();

    const itemsSerialized = classToPlain(items) as Item[];

    return itemsSerialized;
  }
}

export { ListItemsUseCase };
