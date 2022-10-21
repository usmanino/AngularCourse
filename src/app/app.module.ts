import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContainerComponent } from './Container/container.component';
import { HeaderComponent } from './header/header.component';
import { NotificationComponent } from './notification/notification.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { FilterComponent } from './filter/filter.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { FoodProComponent } from './food-pro/food-pro.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { ProductsComponent } from './food-pro/products/products.component';
import { CurrencyType, ProductService } from './ProductServices/services';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'



@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    HeaderComponent,
    NotificationComponent,
    SearchComponent,
    FilterComponent,
    AboutComponent,
    ContactComponent,
    CartComponent,
    FoodProComponent,
    HomeComponent,
    ErrorComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    
  ],
  providers: [ProductService, CurrencyType],
  bootstrap: [AppComponent]
})
export class AppModule { }

