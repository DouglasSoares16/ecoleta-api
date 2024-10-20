import { ExampleRepositoryInMemory } from "@modules/example/repositories/in-memory/ExampleRepositoryInMemory";

import { ListExampleUseCase } from "./ListExampleUseCase";

let exampleRepositoryInMemory: ExampleRepositoryInMemory;
let listExampleUseCase: ListExampleUseCase;

describe("UseCase: List All Examples", () => {
  beforeEach(() => {
    exampleRepositoryInMemory = new ExampleRepositoryInMemory();
    listExampleUseCase = new ListExampleUseCase(exampleRepositoryInMemory);
  });

  it("Should be able to list all examples", async () => {
    const example1 = {
      name: "Example 1",
      email: "example1@gmail.com",
      password: "12345",
    };

    const example2 = {
      name: "Example 2",
      email: "example2@gmail.com",
      password: "12345",
    };

    await exampleRepositoryInMemory.create(example1);
    await exampleRepositoryInMemory.create(example2);

    const result = await listExampleUseCase.execute();

    expect(result).toHaveLength(2);
    expect(result[0]).toHaveProperty("id");
    expect(result[1]).toHaveProperty("id");
  });
});
