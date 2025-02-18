import { HttpClient } from '@angular/common/http';
import { Product } from '../model/products'; 
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[] = [];
  // items: {product: Product, quantity: number }[] = [];

  //Inyectamos el servicio  HttpClient para hacer peticiones HTTP
  constructor(private http: HttpClient) { }

  //funcion para agregar un producto al carrito 
  addToCart(product: Product) {
    this.items.push(product);
  }

  //funcion para obtener los productos que están actualmente en el carrito
  getItems() {
    return this.items;
  }

  //funcion para limpiar el carrito
  clearCart() {
    this.items = [];
    return this.items;
  }

  //obtenermos los precios de un archivo JSON 
  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }
}
