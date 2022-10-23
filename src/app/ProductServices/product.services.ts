import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Subject, throwError } from "rxjs";
import { Product } from "../model/product-model";

@Injectable({ providedIn: "root" })
export class NewProductService {
  error = new Subject<string>();
  constructor(private http: HttpClient) { }
  // create product in database

  url: string = 'https://chat-app-9728f-default-rtdb.firebaseio.com/product.json';

  createProduct(product: {}) {
    console.log(product);
    const headers = new HttpHeaders({ 'myHeader': 'Factorial' })
    this.http.post(this.url, product, { headers: headers })
      .subscribe((res) => {
        console.log(res);
      }, (err) => {
        this.error.next(err.message);
      });

  }

  // fetch product in database
  fetchProduct() {
    const header = new HttpHeaders({ 'myHeader': 'Factorial' })
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    return this.http.get<{[key: string]: Product}>(this.url, { headers: header }).pipe(map((res) =>{
      const product = [];
      for(const key in res){
       if(res.hasOwnProperty(key)){
        product.push({...res[key], id:key })
       }
      }
      return product;
    }), catchError((err) => {
      return throwError(err);
    }));

  }

  // delect product in database
  deleteProduct() {
    
  }

  deleteAllProduct() {

  }

  updateProduct(id: string, value: Product) {
    this.http.put('https://chat-app-9728f-default-rtdb.firebaseio.com/product/' + id + '.json', value)
      .subscribe();
  }

}