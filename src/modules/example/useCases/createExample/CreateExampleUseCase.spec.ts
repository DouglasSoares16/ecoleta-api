import { ExamplesErrors } from "@modules/example/errors/ExamplesErrors";
import { ExampleRepositoryInMemory } from "@modules/example/repositories/in-memory/ExampleRepositoryInMemory";

import { CreateExampleUseCase } from "./CreateExampleUseCase";

let exampleRepositoryInMemory: ExampleRepositoryInMemory;
let createExampleUseCase: CreateExampleUseCase;

describe("UseCase: Create Example", () => {
  beforeEach(() => {
    exampleRepositoryInMemory = new ExampleRepositoryInMemory();
    createExampleUseCase = new CreateExampleUseCase(exampleRepositoryInMemory);
  });

  it("Should be able to create a new Example", async () => {
    const data = {
      name: "Example Name",
      email: "becsobzat@ja.vg",
      password: "12345",
    };

    await createExampleUseCase.execute(data);

    const result = await exampleRepositoryInMemory.findByEmail(data.email);

    expect(result).toHaveProperty("id");
  });

  it("Should not be able to create a new Example, if email already exists", async () => {
    const data = {
      name: "Lucinda Little",
      email: "ni@owru.st",
      password: "12345",
    };

    await createExampleUseCase.execute({
      name: "Lina Schwartz",
      email: "ni@owru.st",
      password: "12345",
    });

    await expect(createExampleUseCase.execute(data)).rejects.toEqual(
      new ExamplesErrors.EmailAlreadyExists()
    );
  });

  it("Should not be able to create a new Example, if name already exists", async () => {
    const data = {
      name: "Etta Stevenson",
      email: "cuva@cojdow.gi",
      password: "12345",
    };

    await createExampleUseCase.execute({
      name: "Etta Stevenson",
      email: "nu@mafac.gs",
      password: "12345",
    });

    await expect(createExampleUseCase.execute(data)).rejects.toEqual(
      new ExamplesErrors.NameAlreadyExists()
    );
  });
});
