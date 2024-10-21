import { ICarDTO } from "@modules/cars/dtos/ICarDTO";
import { Car } from "@modules/cars/infra/typeorm/entities/Car";

import { ICarRepository } from "../ICarRepository";

class CarRepositoryInMemory implements ICarRepository {
  repository: Car[] = [];

  async create(data: ICarDTO): Promise<void> {
    const car = new Car();

    Object.assign(car, data);

    this.repository.push(car);
  }
}

export { CarRepositoryInMemory };
