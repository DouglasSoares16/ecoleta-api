import { inject, injectable } from "tsyringe";

import { Example } from "@modules/example/infra/typeorm/entities/Example";
import { IExampleRepository } from "@modules/example/repositories/IExampleRepository";

@injectable()
class ListExampleUseCase {
  constructor(
    @inject("ExampleRepository")
    private exampleRepository: IExampleRepository
  ) {}

  async execute(): Promise<Example[]> {
    const examples = await this.exampleRepository.findAll();

    return examples;
  }
}

export { ListExampleUseCase };
