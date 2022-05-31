import request from "supertest";
import { Connection } from "typeorm";

import { app } from "@shared/infra/http/app";
import createConnection from "@shared/infra/typeorm/connection";

let connection: Connection;

describe("Controller: Create a new Example", () => {
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();
  });

  it("Should be able to create a new example", async () => {
    const reponse = await request(app).post("/example").send({
      name: "Douglas",
      email: "douglassoares16.dev@gmail.com",
      password: "12345",
    });

    expect(reponse.status).toBe(201);
  });
});
