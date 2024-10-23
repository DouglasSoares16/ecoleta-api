import { getRepository, Repository } from "typeorm";

import { ICreatePointDTO } from "@modules/points/dtos/ICreatePointDTO";
import { IPointsSearchDTO } from "@modules/points/dtos/IPointsSearchDTO";
import { IPointRepository } from "@modules/points/repositories/IPointRepository";

import { Point } from "../entities/Point";

class PointRepository implements IPointRepository {
  private repository: Repository<Point>;

  constructor() {
    this.repository = getRepository(Point);
  }

  async findPointsByIds(points_ids: string[]): Promise<Point[]> {
    const points = await this.repository.findByIds(points_ids, {
      relations: ["items"],
    });

    return points;
  }

  async search({ city, uf, items_ids }: IPointsSearchDTO): Promise<Point[]> {
    const pointsQuery = this.repository
      .createQueryBuilder("p")
      .leftJoinAndSelect("p.items", "item");

    if (city) {
      pointsQuery.andWhere("city = :city", { city });
    }

    if (uf) {
      pointsQuery.andWhere("uf = :uf", { uf });
    }

    if (items_ids && items_ids.length > 0) {
      // SubQuery para trazer todos os items dos pontos de coletas
      /* pointsQuery.andWhere((qb) => {
        const subQuery = qb
          .subQuery()
          .select("p.id")
          .from("points_items", "pi")
          .where("pi.item_id IN (:...items_ids)", { items_ids })
          .getQuery();
        return `p.id IN ${subQuery}`;
      }); */

      pointsQuery.andWhere("item.id IN (:...items_ids)", { items_ids });
    }

    const points = await pointsQuery.select("p.id").getMany();

    return points;
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
