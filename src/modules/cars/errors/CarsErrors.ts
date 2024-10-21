/* eslint-disable */
import { AppError } from "@shared/errors/AppError";

export namespace CarsErrors {
  export class CarAlreadyExists extends AppError {
    constructor() {
      super("Car Already Exists!");
    }
  }
}