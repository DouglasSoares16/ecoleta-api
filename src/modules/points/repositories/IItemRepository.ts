import { ICreateItemDTO } from "../dtos/ICreateItemDTO";
import { Item } from "../infra/typeorm/entities/Item";

interface IItemRepository {
  create(data: ICreateItemDTO): Promise<void>;
  findAll(): Promise<Item[]>;
}

export { IItemRepository };
