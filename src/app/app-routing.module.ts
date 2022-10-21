import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { CartComponent } from "./cart/cart.component";
import { ErrorComponent } from "./error/error.component";
import { FoodProComponent } from "./food-pro/food-pro.component";
import { ProductsComponent } from "./food-pro/products/products.component";
import { HomeComponent } from "./home/home.component";


const appRoute: Routes = [
    {path: '', component: HomeComponent},
   // {path: '', redirectTo:'Home', pathMatch: 'full'},
   {path: 'Home', component: HomeComponent},
   {path: 'About', component: AboutComponent},
   {path: 'Cart', component: CartComponent},
   {path: 'Product', component: FoodProComponent},
   {path: 'Product/:id', component: ProductsComponent},
   {path: '**', component: ErrorComponent}
 ]

@NgModule({
    imports:[
        RouterModule.forRoot(appRoute)
    ],
    exports:[
        RouterModule
    ]
    

})
export class AppRoutingModule{

}