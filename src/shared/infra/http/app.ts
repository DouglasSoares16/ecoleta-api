import "reflect-metadata";
import "express-async-errors";
import "@shared/container";

import express from "express";

import createConnection from "../typeorm/connection";
import { ErrorMiddleware } from "./middlewares/ErrorMiddleware";
import { routes } from "./routes";

createConnection();

const app = express();

app.use(express.json());
app.use(routes);

app.use(ErrorMiddleware);

export { app };
