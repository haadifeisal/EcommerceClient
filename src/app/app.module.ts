import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { CategoryComponent } from './Components/category/category.component';
import { ProductService } from './Services/product.service';
import { ProductComponent } from './Components/product/product.component';
import { CategoryService } from './Services/category.service';
import { ProductPopupComponent } from './Components/product-popup/product-popup.component';
import { CartComponent } from './Components/cart/cart.component';
import { CartService } from './Services/cart.service';
import { CustomerComponent } from './Components/customer/customer.component';
import { AdminComponent } from './Components/admin/admin.component';
import { AuthService } from './Services/auth.service';
import { AdminService } from './Services/admin.service';
import { CustomerService } from './Services/customer.service';
import { AuthComponent } from './Components/auth/auth.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path:'product/:productId', component: ProductComponent},
  {path:'product-list/:categoryId', component: ProductListComponent},
  {path:'cart', component: CartComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductListComponent,
    CategoryComponent,
    ProductComponent,
    ProductPopupComponent,
    CartComponent,
    CustomerComponent,
    AdminComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: 'toast-top-right',
      preventDuplicates: false
    })

  ],
  providers: [
    AuthService,
    ProductService,
    CategoryService,
    CartService,
    CustomerService,
    AdminService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
