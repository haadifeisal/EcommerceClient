import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/Models/User';
import { CategoryService } from 'src/app/Services/category.service';
import { Category } from 'src/app/Models/Category';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  user: User = {
    username: '',
    password: ''
  };
  categories: Category[];

  constructor(
    private categoryService: CategoryService,
    private authService: AuthService,
    private cartService: CartService,
    private route: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.cartService.getProductsInCartCount().subscribe(data => {});
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  login(){
    this.authService.login(this.user).subscribe(data => {
      if(data!=null){
        this.cartService.getProductsInCartCount().subscribe(data=>{});
        let element : HTMLElement  = document.getElementById("closeModal") as HTMLElement;
        element.click();
        this.toastr.success('Logged In', '' + this.user.username);
        this.route.navigate(['']);
      }
      
    }, error => {
      if(error instanceof HttpErrorResponse){
        switch(error.status){
          case 401:
              this.toastr.warning('Failed to log in', 'User');
              break;
        }
      }
    })
  }

  logout(){
    this.authService.logout();
    this.toastr.warning('Logged out', 'User');
    this.route.navigate(['']);
  }

}
