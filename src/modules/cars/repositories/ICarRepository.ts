import { ICarDTO } from "../dtos/ICarDTO";

interface ICarRepository {
  create(data: ICarDTO): Promise<void>;
}

export { ICarRepository };
