import { inject, injectable } from "tsyringe";

import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { ICarRepository } from "@modules/cars/repositories/ICarRepository";

@injectable()
class ListCarsUseCase {
  constructor(
    @inject("CarRepository")
    private carRepository: ICarRepository
  ) {}

  async execute(): Promise<Car[]> {
    const cars = await this.carRepository.findAll();

    return cars;
  }
}

export { ListCarsUseCase };
