import { inject, injectable } from "tsyringe";

import { ICarDTO } from "@modules/cars/dtos/ICarDTO";
import { CarsErrors } from "@modules/cars/errors/CarsErrors";
import { ICarRepository } from "@modules/cars/repositories/ICarRepository";

@injectable()
class CreateCarUseCase {
  constructor(
    @inject("CarRepository")
    private carRepository: ICarRepository
  ) {}

  async execute({
    name,
    brand,
    category,
    price,
    image,
  }: ICarDTO): Promise<void> {
    const carExists = await this.carRepository.findByName(name);

    if (carExists) {
      throw new CarsErrors.CarAlreadyExists();
    }

    await this.carRepository.create({
      name,
      brand,
      category,
      price,
      image,
    });
  }
}

export { CreateCarUseCase };
