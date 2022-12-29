import { IExampleDTO } from "@modules/example/dtos/IExampleDTO";
import { Example } from "@modules/example/infra/typeorm/entities/Example";

import { IExampleRepository } from "../IExampleRepository";

class ExampleRepositoryInMemory implements IExampleRepository {
  repository: Example[] = [];

  async create(data: IExampleDTO): Promise<void> {
    const user = new Example();

    Object.assign(user, data);

    this.repository.push(user);
  }

  async findByEmail(email: string): Promise<Example> {
    return this.repository.find((user) => user.email === email);
  }

  async findByName(name: string): Promise<Example> {
    return this.repository.find((user) => user.name === name);
  }
}

export { ExampleRepositoryInMemory };
