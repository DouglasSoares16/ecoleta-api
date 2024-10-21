import { container } from "tsyringe";

import { CarRepository } from "@modules/cars/infra/typeorm/implementations/CarRepository";
import { ICarRepository } from "@modules/cars/repositories/ICarRepository";
import { ExampleRepository } from "@modules/example/infra/typeorm/implementations/ExampleRepository";
import { IExampleRepository } from "@modules/example/repositories/IExampleRepository";

container.registerSingleton<IExampleRepository>(
  "ExampleRepository",
  ExampleRepository
);

container.registerSingleton<ICarRepository>("CarRepository", CarRepository);
