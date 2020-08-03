import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productId: any;
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
    ) { }

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('productId');

    this.productService.getProductByProductId(this.productId).subscribe(data =>{
      this.product = data;
      console.log("Stock: " + this.product.stock);
    });
  }

}
