import { ICreatePointDTO } from "../dtos/ICreatePointDTO";

interface IPointRepository {
  create(data: ICreatePointDTO): Promise<void>;
}

export { IPointRepository };
