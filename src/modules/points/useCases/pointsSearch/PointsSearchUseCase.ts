import { inject, injectable } from "tsyringe";

import { IPointsSearchDTO } from "@modules/points/dtos/IPointsSearchDTO";
import { Point } from "@modules/points/infra/typeorm/entities/Point";
import { IPointRepository } from "@modules/points/repositories/IPointRepository";

@injectable()
class PointsSearchUseCase {
  constructor(
    @inject("PointRepository")
    private pointRepository: IPointRepository
  ) {}

  async execute({ city, uf, items_ids }: IPointsSearchDTO): Promise<Point[]> {
    const pointsFiltred = await this.pointRepository.search({
      city,
      uf,
      items_ids,
    });

    const points_ids = pointsFiltred.map((point) => point.id);

    const pointsSearched = await this.pointRepository.findPointsByIds(
      points_ids
    );

    return pointsSearched;
  }
}

export { PointsSearchUseCase };
