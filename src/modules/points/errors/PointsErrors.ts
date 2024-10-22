/* eslint-disable */
import { AppError } from "@shared/errors/AppError";

export namespace PointsErrors {
  export class PointNotFound extends AppError {
    constructor() {
      super("Point not found!", 404);
    }
  }
}