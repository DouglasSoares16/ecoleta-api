import { container } from "tsyringe";

import { ItemRepository } from "@modules/points/infra/typeorm/implementations/ItemRepository";
import { PointRepository } from "@modules/points/infra/typeorm/implementations/PointRepository";
import { IItemRepository } from "@modules/points/repositories/IItemRepository";
import { IPointRepository } from "@modules/points/repositories/IPointRepository";

container.registerSingleton<IItemRepository>("ItemRepository", ItemRepository);
container.registerSingleton<IPointRepository>(
  "PointRepository",
  PointRepository
);
