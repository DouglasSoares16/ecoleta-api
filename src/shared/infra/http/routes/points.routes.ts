import { Router } from "express";

import { CreatePointController } from "@modules/points/useCases/createPoint/CreatePointController";
import { PointProfileController } from "@modules/points/useCases/pointProfile/PointProfileController";

const pointsRoutes = Router();

const createPointControler = new CreatePointController();
const pointProfileController = new PointProfileController();

pointsRoutes.post("/", createPointControler.handle);
pointsRoutes.get("/:id", pointProfileController.handle);

export { pointsRoutes };
