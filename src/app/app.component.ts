import { Component, OnInit } from '@angular/core';
import { AuthService } from './Services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CartService } from './Services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'EcommerceClient';

  jwtHelper = new JwtHelperService();

  constructor(
    private authService: AuthService
    ){}

  ngOnInit(){
    const token = localStorage.getItem('token');
    if(token){
      this.authService.decodedToken = this.jwtHelper.decodeToken(token);
      this.authService.username = this.authService.decodedToken.unique_name; 
      this.authService.userId = this.authService.decodedToken.nameid; 
    }
    
  }

}
