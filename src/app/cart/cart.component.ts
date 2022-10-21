import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Product } from '../model/product-model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private http: HttpClient) { }

  allProducts: Product[] = [];

  ngOnInit(): void {
    this.fetchProduct();
  }

  onProductsFetchs(){
    this.fetchProduct();
  }

  url:string = 'https://chat-app-9728f-default-rtdb.firebaseio.com/product.json';

  onProductCreate(product: {}){
    console.log(product);
    const headers = new HttpHeaders({'myHeader': 'Factorial'})
    this.http.post(this.url, product, {headers: headers})
    .subscribe((res) => {
      console.log(res);
    })

  }

  private fetchProduct(){
    this.http.get<{[key: string]: Product}>(this.url).pipe(map((res) =>{
      const product = [];
      for(const key in res){
       if(res.hasOwnProperty(key)){
        product.push({...res[key], id:key })
       }
      }
      return product;
    })).subscribe((product) => {
      console.log(product)
      this.allProducts = product;
    })
  }

}
