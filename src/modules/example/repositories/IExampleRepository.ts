import { ICreateExampleDTO } from "../useCases/createExample/ICreateExampleDTO";

interface IExampleRepository {
  create(data: ICreateExampleDTO): Promise<void>;
}

export { IExampleRepository };
