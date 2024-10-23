import { Router } from "express";

import { CreatePointController } from "@modules/points/useCases/createPoint/CreatePointController";
import { PointProfileController } from "@modules/points/useCases/pointProfile/PointProfileController";
import { PointsSearchController } from "@modules/points/useCases/pointsSearch/PointsSearchController";

const pointsRoutes = Router();

const createPointControler = new CreatePointController();
const pointProfileController = new PointProfileController();
const pointsSearchController = new PointsSearchController();

pointsRoutes.post("/", createPointControler.handle);
pointsRoutes.get("/:id", pointProfileController.handle);
pointsRoutes.get("/", pointsSearchController.handle);

export { pointsRoutes };
