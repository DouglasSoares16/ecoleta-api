import { inject, injectable } from "tsyringe";
import { validate as isUUID } from "uuid";

import { PointsErrors } from "@modules/points/errors/PointsErrors";
import { Point } from "@modules/points/infra/typeorm/entities/Point";
import { IPointRepository } from "@modules/points/repositories/IPointRepository";

@injectable()
class PointProfileUseCase {
  constructor(
    @inject("PointRepository")
    private pointRepository: IPointRepository
  ) {}

  async excute(point_id: string): Promise<Point> {
    if (!isUUID(point_id)) {
      throw new PointsErrors.PointNotFound();
    }

    const point = await this.pointRepository.findById(point_id);

    if (!point) {
      throw new PointsErrors.PointNotFound();
    }

    return point;
  }
}

export { PointProfileUseCase };
