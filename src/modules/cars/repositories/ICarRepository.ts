import { ICarDTO } from "../dtos/ICarDTO";
import { Car } from "../infra/typeorm/entities/Car";

interface ICarRepository {
  create(data: ICarDTO): Promise<void>;
  findByName(name: string): Promise<Car>;
  findAll(): Promise<Car[]>;
}

export { ICarRepository };
