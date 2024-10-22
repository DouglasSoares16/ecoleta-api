import { container } from "tsyringe";

import { CarRepository } from "@modules/cars/infra/typeorm/implementations/CarRepository";
import { ICarRepository } from "@modules/cars/repositories/ICarRepository";
import { ExampleRepository } from "@modules/example/infra/typeorm/implementations/ExampleRepository";
import { IExampleRepository } from "@modules/example/repositories/IExampleRepository";
import { ItemRepository } from "@modules/points/infra/typeorm/implementations/ItemRepository";
import { PointRepository } from "@modules/points/infra/typeorm/implementations/PointRepository";
import { IItemRepository } from "@modules/points/repositories/IItemRepository";
import { IPointRepository } from "@modules/points/repositories/IPointRepository";

container.registerSingleton<IExampleRepository>(
  "ExampleRepository",
  ExampleRepository
);

container.registerSingleton<ICarRepository>("CarRepository", CarRepository);

container.registerSingleton<IItemRepository>("ItemRepository", ItemRepository);
container.registerSingleton<IPointRepository>(
  "PointRepository",
  PointRepository
);
