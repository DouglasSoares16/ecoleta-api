import { getRepository, Repository } from "typeorm";

import { ICreatePointDTO } from "@modules/points/dtos/ICreatePointDTO";
import { IPointRepository } from "@modules/points/repositories/IPointRepository";

import { Point } from "../entities/Point";

class PointRepository implements IPointRepository {
  private repository: Repository<Point>;

  constructor() {
    this.repository = getRepository(Point);
  }

  async findById(point_id: string): Promise<Point> {
    const point = await this.repository.findOne(point_id, {
      relations: ["items"],
    });

    return point;
  }

  async create(data: ICreatePointDTO): Promise<void> {
    const point = this.repository.create(data);

    await this.repository.save(point);
  }
}

export { PointRepository };
