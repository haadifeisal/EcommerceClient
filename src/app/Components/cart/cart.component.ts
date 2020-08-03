import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { ActivatedRoute } from '@angular/router';
import { CartProduct } from 'src/app/Models/CartProduct';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartProducts : CartProduct[];
  productTotalt : number;
  cartSum : number = 0;
  productsInCartCount : number = 0;

  constructor(
    private cartService: CartService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.getProductsInCart();
    this.getProductsInCartCount();
  }

  getProductsInCart(){
    this.cartService.getProductsInCart().subscribe(data => {
      this.cartProducts = data;
      for(var i=0;i<this.cartProducts.length;i++){
        this.cartSum += (this.cartProducts[i].quantity * this.cartProducts[i].product.price);
      }
    });
  }

  getProductsInCartCount(){
    this.cartService.getProductsInCartCount().subscribe(data => {
      this.productsInCartCount = data;
    });
  }

  add(productId: string){
    this.cartService.addProductToCart(productId).subscribe(data => {
      this.cartSum = 0;
      this.getProductsInCart();
      this.getProductsInCartCount();
    });
  }

  substract(cartProductId: string){
    this.cartService.decreaseProductQuantityFromCart(cartProductId).subscribe(data => {
      this.cartSum = 0;
      this.getProductsInCart();
      this.getProductsInCartCount();
    })
  }

  removeProduct(productId: string){
    if(confirm("Are you sure you want to remove the product from your cart?")){
      alert("Product removed from cart");
    }
  }

  clearCart(){
    alert("Are you sure you want to clear your cart?");
  }

  placeOrder(){
    alert("Order placed");
  }

}
