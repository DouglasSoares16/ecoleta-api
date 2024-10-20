import request from "supertest";
import { Connection, createConnection } from "typeorm";

import { app } from "@shared/infra/http/app";

let connection: Connection;

describe("Controller: List All Examples", () => {
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();
  });

  it("Should be able to list all examples", async () => {
    await request(app).post("/example").send({
      name: "Douglas",
      email: "douglassoares16.dev@gmail.com",
      password: "12345",
    });

    await request(app).post("/example").send({
      name: "Soares",
      email: "soares.dev@gmail.com",
      password: "12345",
    });

    const response = await request(app).get("/example");

    console.log(response.body);

    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(2);
    expect(response.body[0]).toHaveProperty("id");
    expect(response.body[1]).toHaveProperty("id");
  });
});
