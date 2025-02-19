import { Injectable } from '@angular/core';
import { ProvidersM } from '../model/provider';
import { HttpClient } from '@angular/common/http';
import { Product, products } from '../model/products';
import { Providers2 } from '../model/provider2';
import { filter } from 'rxjs';
import { Productos, productos2 } from '../model/productos';

@Injectable({
  providedIn: 'root'
})

export class ProvidesService {

  //una array vacia para guardar los providers
  providers: ProvidersM[]=[];
  providers2: Providers2[]= [];

  // declaramos la ruta donde se encuentra el servicio para los proveedores
  private url = "http://localhost:3001/providers";
  private url2 = "http://localhost:3002/providers2"

  //constructor que inyecta el servicio HttpClient para hacer peticiones HTTP
  constructor(private http: HttpClient) { }
  
  //obtenemos todos los proveedores
  getProviders(){
    //hacemos un get al servidor local para obtener la lista de proveedores
    return this.http.get<ProvidersM[]>(this.url);
  }

  getProviders2(){
    return this.http.get<Providers2[]>(this.url2);
  }

  //metodo que recibe un providerId y filtra los productos que pertenecen a ese proveedor 
  getProductProvider(providerId: number): Product[] | undefined{
    //filtra los productos en el arreglo "products" para encontrar aquellos cuyo "provider.id" coincide con el providerId
    return products.filter(p=> p.provider.id === providerId);
  }

  getProductProvider2(providerId: number): Productos[] | undefined{
    return productos2.filter(e => e.provider2.id === providerId);
  }
}
