/*import { HttpClient } from '@angular/common/http';

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
}*/

import { HttpClient } from '@angular/common/http';
import { Product } from '../model/products';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  private items: Product[] = [];
  private itemsSubject = new BehaviorSubject<Product[]>(this.items);
  itemsObservable = this.itemsSubject.asObservable();

  constructor(private http: HttpClient) {
    // Cargar carrito de localStorage al iniciar el servicio
    const savedItems = localStorage.getItem('cartItems');
    if (savedItems) {
      this.items = JSON.parse(savedItems);
      this.itemsSubject.next(this.items);
    }
  }

  private saveToLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(this.items));
  }

  addToCart(product: Product) {
    this.items.push(product);
    this.itemsSubject.next(this.items);
    this.saveToLocalStorage();
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    this.itemsSubject.next(this.items);
    this.saveToLocalStorage();
    return this.items;
  }

  removeFromCart(product: Product) {
    const index = this.items.findIndex(item => item.id === product.id); 
    if (index !== -1) {
      this.items.splice(index, 1);
      this.itemsSubject.next(this.items);
      this.saveToLocalStorage();
    }
  }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }
}