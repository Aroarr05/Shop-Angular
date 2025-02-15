import { Injectable } from '@angular/core';
import { ProvidersM } from '../model/provider';
import { HttpClient } from '@angular/common/http';
import { Product, products } from '../model/products';

@Injectable({
  providedIn: 'root'
})

export class ProvidesService {

  providers: ProvidersM[]=[];
  private url = "http://localhost:3000/providers";

  constructor(private http: HttpClient) { }
  
  getProviders(){
    return this.http.get<ProvidersM[]>(this.url);
  }

  getProductProvider(providerId: number): Product[] | undefined{
    return products.filter(p=> p.provider.id === providerId);
  }
}
