import { Router } from "express";

import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";
import { ListCarsController } from "@modules/cars/useCases/listCars/ListCarsController";

const createCarController = new CreateCarController();
const listCarsController = new ListCarsController();

const carsRoutes = Router();

carsRoutes.post("/", createCarController.handle);
carsRoutes.get("/", listCarsController.handle);

export { carsRoutes };
