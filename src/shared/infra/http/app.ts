import "reflect-metadata";
import "express-async-errors";
import "@shared/container";

import cors from "cors";
import express from "express";
import path from "path";

import createConnection from "../typeorm/connection";
import { ErrorMiddleware } from "./middlewares/ErrorMiddleware";
import { routes } from "./routes";

createConnection();

const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);

app.use(ErrorMiddleware);
app.use(
  "/uploads",
  express.static(path.resolve(__dirname, "..", "..", "uploads"))
);

export { app };
