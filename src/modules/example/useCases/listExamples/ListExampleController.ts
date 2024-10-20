import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListExampleUseCase } from "./ListExampleUseCase";

class ListExampleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listExampleUseCase = container.resolve(ListExampleUseCase);

    const examples = await listExampleUseCase.execute();

    return response.json(examples);
  }
}

export { ListExampleController };
