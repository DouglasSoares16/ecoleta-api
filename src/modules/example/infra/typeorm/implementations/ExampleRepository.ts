import { getRepository, Repository } from "typeorm";

import { IExampleDTO } from "@modules/example/dtos/IExampleDTO";
import { IExampleRepository } from "@modules/example/repositories/IExampleRepository";

import { Example } from "../entities/Example";

class ExampleRepository implements IExampleRepository {
  private repository: Repository<Example>;

  constructor() {
    this.repository = getRepository(Example);
  }

  async findAll(): Promise<Example[]> {
    const examples = await this.repository.find({
      select: ["id", "name", "email", "created_at", "updated_at"],
    });

    return examples;
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

  async create(data: IExampleDTO): Promise<void> {
    const example = this.repository.create(data);

    await this.repository.save(example);
  }
}

export { ExampleRepository };
