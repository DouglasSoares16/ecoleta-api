import { getRepository, Repository } from "typeorm";

import { IExampleRepository } from "../../../repositories/IExampleRepository";
import { ICreateExampleDTO } from "../../../useCases/createExample/ICreateExampleDTO";
import { Example } from "../entities/Example";

class ExampleRepository implements IExampleRepository {
  private repository: Repository<Example>;

  constructor() {
    this.repository = getRepository(Example);
  }

  async findByEmail(email: string): Promise<Example> {
    const example = await this.repository.findOne({
      where: {
        email,
      },
    });

    return example;
  }

  async findByName(name: string): Promise<Example> {
    const example = await this.repository.findOne({
      where: {
        name,
      },
    });

    return example;
  }

  async create(data: ICreateExampleDTO): Promise<void> {
    const example = this.repository.create(data);

    await this.repository.save(example);
  }
}

export { ExampleRepository };
