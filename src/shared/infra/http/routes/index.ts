import { Router } from "express";

import { carsRoutes } from "./cars.routes";
import { exampleRoutes } from "./example.routes";

const routes = Router();

routes.use("/example", exampleRoutes);
routes.use("/cars", carsRoutes);

export { routes };
