import { Request, Response } from "express";
import { container } from "tsyringe";

import { IPointsSearchDTO } from "@modules/points/dtos/IPointsSearchDTO";

import { PointsSearchUseCase } from "./PointsSearchUseCase";

class PointsSearchController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { city, uf, items_ids } = request.query as IPointsSearchDTO;

    const pointsSearchUseCase = container.resolve(PointsSearchUseCase);

    let parsedItems: string[];

    if (items_ids && items_ids.length > 0) {
      // Só vou fazer o split, se realmente tiver algum ID no items_ids
      parsedItems = String(items_ids)
        .split(",")
        .map((item) => item.trim());
    }

    // Se não tiver nenhum ID, não faço o split, pois o array ficará com '', causando conflito na frente
    const points = await pointsSearchUseCase.execute({
      city,
      uf,
      items_ids: parsedItems,
    });

    return response.json(points);
  }
}

export { PointsSearchController };
