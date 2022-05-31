import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";

import { IExampleRepository } from "@modules/example/repositories/IExampleRepository";

import { CreateExampleError } from "./CreateExampleError";
import { ICreateExampleDTO } from "./ICreateExampleDTO";

@injectable()
class CreateExampleUseCase {
  constructor(
    @inject("ExampleRepository")
    private exampleRepository: IExampleRepository
  ) {}

  async execute({ email, name, password }: ICreateExampleDTO): Promise<void> {
    const emailAlreadyExists = await this.exampleRepository.findByEmail(email);

    if (emailAlreadyExists) {
      throw new CreateExampleError.EmailAlreadyExists();
    }

    const nameAlreadyExists = await this.exampleRepository.findByName(name);

    if (nameAlreadyExists) {
      throw new CreateExampleError.NameAlreadyExists();
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
