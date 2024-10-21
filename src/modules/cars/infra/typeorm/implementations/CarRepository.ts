import { getRepository, Repository } from "typeorm";

import { ICarDTO } from "@modules/cars/dtos/ICarDTO";
import { ICarRepository } from "@modules/cars/repositories/ICarRepository";

import { Car } from "../entities/Car";

class CarRepository implements ICarRepository {
  private repository: Repository<Car>;

  constructor() {
    this.repository = getRepository(Car);
  }

  async create(data: ICarDTO): Promise<void> {
    const car = this.repository.create(data);

    await this.repository.save(car);
  }
}

export { CarRepository };
