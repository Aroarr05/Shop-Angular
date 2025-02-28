import { ProvidersDos } from "./providerDos";

export  interface Productos{
    product_id: number;
    product_name: string;
    cost: number;
    details: string;
    supplier: number;
    providerDos: ProvidersDos;
}

export const products = [
    {
      product_id: 1,
      product_name: "Phone XL",
      cost: 799,
      details: "A large phone with one of the best screens",
      providerDos: { id: 1, name: "Zahira" }
    },
    {
      product_id: 2,
      product_name: "Phone Mini",
      cost: 699,
      details: "A great phone with one of the best cameras",
      providerDos: { id: 2, name: "Aroa" }
    },
    {
      product_id: 3,
      name: "Phone Standard",
      cost: 299,
      details: "",
      providerDos: { id: 3, name: "Juan" }
    }
  ];