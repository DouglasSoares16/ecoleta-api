import { Router } from "express";

import { CreatePointController } from "@modules/points/useCases/createPoint/CreatePointController";

const pointsRoutes = Router();

const createPointControler = new CreatePointController();

pointsRoutes.post("/", createPointControler.handle);

export { pointsRoutes };
