import { IExampleDTO } from "../dtos/IExampleDTO";
import { Example } from "../infra/typeorm/entities/Example";

interface IExampleRepository {
  create(data: IExampleDTO): Promise<void>;
  findByEmail(email: string): Promise<Example>;
  findByName(name: string): Promise<Example>;
}

export { IExampleRepository };
