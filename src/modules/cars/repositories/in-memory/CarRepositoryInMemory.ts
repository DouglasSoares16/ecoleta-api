import { ICarDTO } from "@modules/cars/dtos/ICarDTO";
import { Car } from "@modules/cars/infra/typeorm/entities/Car";

import { ICarRepository } from "../ICarRepository";

class CarRepositoryInMemory implements ICarRepository {
  repository: Car[] = [];

  async findByName(name: string): Promise<Car> {
    return this.repository.find((car) => car.name === name);
  }

  async findAll(): Promise<Car[]> {
    return this.repository;
  }

  async create(data: ICarDTO): Promise<void> {
    const car = new Car();

    Object.assign(car, data);

    this.repository.push(car);
  }
}

export { CarRepositoryInMemory };
