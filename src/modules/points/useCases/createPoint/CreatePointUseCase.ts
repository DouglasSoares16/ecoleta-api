import { inject, injectable } from "tsyringe";

import { ICreatePointDTO } from "@modules/points/dtos/ICreatePointDTO";
import { IItemRepository } from "@modules/points/repositories/IItemRepository";
import { IPointRepository } from "@modules/points/repositories/IPointRepository";

interface ICreatePointUseCase extends ICreatePointDTO {
  items_ids: string[];
}

@injectable()
class CreatePointUseCase {
  constructor(
    @inject("PointRepository")
    private pointRepository: IPointRepository,

    @inject("ItemRepository")
    private itemRepository: IItemRepository
  ) {}

  async execute({
    name,
    email,
    city,
    image,
    uf,
    whatsapp,
    latitude,
    longitude,
    items_ids,
  }: ICreatePointUseCase): Promise<void> {
    const items = await this.itemRepository.findByIds(items_ids);

    await this.pointRepository.create({
      name,
      email,
      city,
      image,
      uf,
      whatsapp,
      latitude,
      longitude,
      items,
    });
  }
}

export { CreatePointUseCase };
