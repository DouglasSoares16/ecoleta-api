import { ICreateItemDTO } from "../dtos/ICreateItemDTO";

interface IItemRepository {
  create(data: ICreateItemDTO): Promise<void>;
}

export { IItemRepository };
