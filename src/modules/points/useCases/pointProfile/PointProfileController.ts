import { Request, Response } from "express";
import { container } from "tsyringe";

import { PointProfileUseCase } from "./PointProfileUseCase";

class PointProfileController {
  async handle(request: Request, response: Response): Promise<Response> {
    const pointProfileUseCase = container.resolve(PointProfileUseCase);

    const { id } = request.params;

    const point = await pointProfileUseCase.excute(id);

    return response.json(point);
  }
}

export { PointProfileController };
