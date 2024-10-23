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
      image:
        "https://images.unsplash.com/photo-1501523460185-2aa5d2a0f981?q=60&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
