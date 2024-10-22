import { Item } from "../infra/typeorm/entities/Item";

export interface ICreatePointDTO {
  name: string;
  email: string;
  whatsapp: string;
  image: string;
  city: string;
  uf: string;
  latitude: number;
  longitude: number;
  items?: Item[];
}
