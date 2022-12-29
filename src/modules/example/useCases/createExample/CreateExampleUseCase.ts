import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";

import { IExampleDTO } from "@modules/example/dtos/IExampleDTO";
import { ExamplesErrors } from "@modules/example/errors/ExamplesErrors";
import { IExampleRepository } from "@modules/example/repositories/IExampleRepository";

@injectable()
class CreateExampleUseCase {
  constructor(
    @inject("ExampleRepository")
    private exampleRepository: IExampleRepository
  ) {}

  async execute({ email, name, password }: IExampleDTO): Promise<void> {
    const emailAlreadyExists = await this.exampleRepository.findByEmail(email);

    if (emailAlreadyExists) {
      throw new ExamplesErrors.EmailAlreadyExists();
    }

    const nameAlreadyExists = await this.exampleRepository.findByName(name);

    if (nameAlreadyExists) {
      throw new ExamplesErrors.NameAlreadyExists();
    }

    const passwordHash = await hash(password, 10);

    await this.exampleRepository.create({
      name,
      email,
      password: passwordHash,
    });
  }
}

export { CreateExampleUseCase };
