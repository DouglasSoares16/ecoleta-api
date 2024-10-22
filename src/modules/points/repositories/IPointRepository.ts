import { ICreatePointDTO } from "../dtos/ICreatePointDTO";
import { Point } from "../infra/typeorm/entities/Point";

interface IPointRepository {
  create(data: ICreatePointDTO): Promise<void>;
  findById(point_id: string): Promise<Point>;
}

export { IPointRepository };
