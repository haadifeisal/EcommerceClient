import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../Models/Product';
import { Category } from '../Models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url = `http://localhost:8081/v1/Category/`;
  
  constructor(private http: HttpClient) { }

  getCategories() : Observable<Category[]>{
    return this.http.get<Category[]>(this.url).pipe();
  }

  getProductsInCategory(categoryId: number): Observable<Product[]>{
    return this.http.get<Product[]>(this.url + categoryId).pipe();
  }

}
