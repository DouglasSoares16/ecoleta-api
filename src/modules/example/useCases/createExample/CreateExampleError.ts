/* eslint-disable */

import { AppError } from "@shared/errors/AppError";

export namespace CreateExampleError {
  export class EmailAlreadyExists extends AppError {
    constructor() {
      super("Email Already Exists!");
    }
  }

  export class NameAlreadyExists extends AppError {
    constructor() {
      super("Name Already Exists!");
    }
  }
}