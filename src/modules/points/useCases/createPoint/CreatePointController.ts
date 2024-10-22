import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreatePointUseCase } from "./CreatePointUseCase";

class CreatePointController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createPointUseCase = container.resolve(CreatePointUseCase);

    const { name, email, city, uf, whatsapp, latitude, longitude, items_ids } =
      request.body;

    await createPointUseCase.execute({
      name,
      email,
      city,
      image: "image-fake",
      uf,
      whatsapp,
      latitude,
      longitude,
      items_ids,
    });

    return response.status(201).json();
  }
}

export { CreatePointController };
