import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API:string ='https://60f6f27aeb48e7001791981b.mockapi.io/product'

  constructor(
    private http:HttpClient
  ) { }

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.API)
  }
  getInfo(id:number): Observable<Product> {
    return this.http.get<Product>(`${this.API}/${id}`);
  }

  getProduct(id:number):Observable<Product>{
    return this.http.get<Product>(`${this.API}/${id}`);
  }

  addProduct(item:Product):Observable<Product>{
    return this.http.post<Product>(`${this.API}`,item);
  }
  removeProduct(id: Number): Observable<Product>{
    return this.http.delete<Product>(`${this.API}/${id}`);
  }
  updateProduct(item: Product): Observable<Product> {
    return this.http.put<Product>(`${this.API}/${item.id}`, item);
  }
}
