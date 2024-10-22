import { Router } from "express";

import { ListItemsController } from "@modules/points/useCases/ListItems/ListItemsController";

const itemsRoutes = Router();

const listItemsController = new ListItemsController();

itemsRoutes.get("/", listItemsController.handle);

export { itemsRoutes };
