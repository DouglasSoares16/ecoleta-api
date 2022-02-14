import "reflect-metadata";
import "../typeorm/connection";
import "../../container";

import express from "express";

import { routes } from "./routes";

const app = express();

app.use(express.json());
app.use(routes);

app.listen(5500, () => console.log("Server is running ;)"));
