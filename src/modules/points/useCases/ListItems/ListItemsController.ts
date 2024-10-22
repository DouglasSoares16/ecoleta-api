import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListItemsUseCase } from "./ListItemsUseCase";

class ListItemsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listItemsUseCase = container.resolve(ListItemsUseCase);

    const items = await listItemsUseCase.execute();

    return response.json(items);
  }
}

export { ListItemsController };
