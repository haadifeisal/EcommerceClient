import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../Models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = `http://localhost:8081/v1/Product/`;
  
  constructor(private http: HttpClient) { }

  getProductByProductId(productId: string): Observable<Product>{
    return this.http.get<Product>(this.url + productId).pipe();
  }

}
