import { Router } from "express";

import { CreateExampleController } from "@modules/example/useCases/createExample/CreateExampleController";
import { ListExampleController } from "@modules/example/useCases/listExamples/ListExampleController";

const createExampleController = new CreateExampleController();
const listExampleController = new ListExampleController();

const exampleRoutes = Router();

exampleRoutes.post("/", createExampleController.handle);
exampleRoutes.get("/", listExampleController.handle);

export { exampleRoutes };
