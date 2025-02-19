import { Providers2 } from "./provider2"

export  interface Productos{
    product_id: number;
    product_name: string;
    cost: number;
    details: string;
    supplier: number;
    provider2: Providers2;
}

export const productos2=[
    {
        product_id: 2,
        product_name: "Phone Mini",
        cost: 599,
        details: "A compact phone with great performance",
        suppiler: 2,
        provider2: {id:1 , name: "Zahira"}
    }
]