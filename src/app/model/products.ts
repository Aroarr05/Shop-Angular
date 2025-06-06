import { ProvidersM } from "./provider";

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  provider:ProvidersM;
}

export const products = [
  {
    id: 1,
    name: "Phone XL",
    price: 799,
    description: "A large phone with one of the best screens",
    provider: { id: 1, name: "TechMovil S.A." }
  },
  {
    id: 2,
    name: "Phone Mini",
    price: 699,
    description: "A great phone with one of the best cameras",
    provider: { id: 2, name: "ElectroMundo" }
  },
  {
    id: 3,
    name: "Phone Standard",
    price: 299,
    description: "",
    provider: { id: 3, name: "Distribuidora CeluTech" }
  }
];

