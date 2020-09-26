import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { CartProduct } from '../Models/CartProduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  url = `http://localhost:8081/v1/Cart`;
  cartCount : number;

  constructor(
    private http: HttpClient,
    private authService: AuthService
    ) { }

  getProductsInCart(): Observable<CartProduct[]>{
    return this.http.get<CartProduct[]>(this.url + "/", this.headers()).pipe();
  }

  getProductsInCartCount(): Observable<number>{
    return this.http.get<number>(this.url + "/cartCount/", this.headers())
    .pipe(
      map(data => {
        this.cartCount = data;
        return data;
      })
    );
  }

  addProductToCart(productId: string): Observable<any>{
    return this.http.post<any>(this.url + "?productId=" + productId, null, this.headers())
    .pipe();
  }

  decreaseProductQuantityFromCart(cartProductId: string): Observable<any>{
    return this.http.delete<any>(this.url + "/quantity/" + cartProductId, this.headers())
    .pipe();
  }

  headers(){
    const token = localStorage.getItem('token');

    const httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : 'Bearer ' + token
    });

    let options = {
      headers: httpHeaders
    };

    return options;
  }

}
