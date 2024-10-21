import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCarUseCase } from "./CreateCarUseCase";

class CreateCarController {
  async handle(request: Request, responde: Response): Promise<Response> {
    const createCarUseCase = container.resolve(CreateCarUseCase);

    const { name, brand, category, price, image } = request.body;

    await createCarUseCase.execute({ name, brand, category, price, image });

    return responde.status(201).json();
  }
}

export { CreateCarController };
