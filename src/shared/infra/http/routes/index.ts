import { Router } from "express";

import { carsRoutes } from "./cars.routes";
import { exampleRoutes } from "./example.routes";
import { itemsRoutes } from "./items.routes";
import { pointsRoutes } from "./points.routes";

const routes = Router();

routes.use("/example", exampleRoutes);
routes.use("/cars", carsRoutes);
routes.use("/items", itemsRoutes);
routes.use("/points", pointsRoutes);

export { routes };
