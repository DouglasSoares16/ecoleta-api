import { ICreatePointDTO } from "../dtos/ICreatePointDTO";
import { IPointsSearchDTO } from "../dtos/IPointsSearchDTO";
import { Point } from "../infra/typeorm/entities/Point";

interface IPointRepository {
  create(data: ICreatePointDTO): Promise<void>;
  findById(point_id: string): Promise<Point>;
  search(data: IPointsSearchDTO): Promise<Point[]>;
  findPointsByIds(points_ids: string[]): Promise<Point[]>;
}

export { IPointRepository };
