import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = `http://localhost:8081/v1/Auth/`;
  token: string;
  decodedToken: any;
  username: string;
  userId: string;
  jwtHelper = new JwtHelperService();
  constructor(
    private http: HttpClient
  ) { }

  login(user: User): Observable<any>{
    return this.http.post(this.url + "login", user)
    .pipe(
      map(data => {
        this.token = data['token'];
        localStorage.setItem('token', this.token);
        this.decodedToken = this.jwtHelper.decodeToken(this.token);
        this.username = this.decodedToken.unique_name;
        this.userId = this.decodedToken.nameid;
        return this.token;
      })
    );
  }
  
  loggedIn(){
    const token = localStorage.getItem('token');
    if(token != null && !this.jwtHelper.isTokenExpired(token)){
        return true;
    }
    return false;
  }

  logout(){
    this.token = null;
    localStorage.removeItem('token');
  }

}
