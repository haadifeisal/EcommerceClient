import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url = `http://localhost:54640/v1/Customer/`;

  constructor(
    private http: HttpClient
  ) { }

  

}
