import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Models/Product';
import { CategoryService } from 'src/app/Services/category.service';
import { CartService } from 'src/app/Services/cart.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  categoryId: any;
  products: Product[];

  constructor(
    private categoryService: CategoryService,
    private cartService: CartService,
    private authService: AuthService,
    private toastr: ToastrService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.categoryId = this.route.snapshot.paramMap.get('categoryId');

    this.categoryService.getProductsInCategory(this.categoryId).subscribe(data =>{
      this.products = data;
      for(var i=0;i<this.products.length;i++){
        console.log("Title: " + this.products[i].title);
      }
    });
  }

  addToCart(productId: string){
    this.cartService.addProductToCart(productId).subscribe(data => {
      this.cartService.getProductsInCartCount().subscribe(data => {});
      this.toastr.success('Added product to cart', '');
    },error => {
      if(error instanceof HttpErrorResponse){
        switch(error.status){
          case 400:
            this.toastr.error('Could not add product to cart', 'Error');
            break;
          case 401:
            this.toastr.error('User is unauthorized', 'Error');
            break;
        }
      }
    })
  }

}
