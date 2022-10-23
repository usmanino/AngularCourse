import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map, Subscription, catchError, throwError } from 'rxjs';
import { Product } from '../model/product-model';
import { NewProductService } from '../ProductServices/product.services';
import { CurrencyType } from '../ProductServices/services';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy{

  constructor(private http: HttpClient, private currencyType: CurrencyType,private newproductservice: NewProductService) { }
 
 

  allProducts: Product[] = [];
  currency:any;
  isFetching:boolean = false;
  editMode: boolean = false;
  currentProductID: string;
  errorMessage: string = null;
  errorSub: Subscription
  @ViewChild('productForm') f: NgForm;

  ngOnInit(): void {
    this.fetchProduct();
    this.currency = this.currencyType.currency;
   this.errorSub = this.newproductservice.error.subscribe((message) => {
      this.errorMessage = message;
    });
  }

  onProductsFetchs(){
    this.fetchProduct();
  }

  url:string = 'https://chat-app-9728f-default-rtdb.firebaseio.com/product.json';

  onProductCreate(product: {pName: string, 
    desc: string,
    price: string, 
    type: string,
    status: string}){
    if(!this.editMode)
    this.newproductservice.createProduct(product);
    else
    this.newproductservice.updateProduct(this.currentProductID, product);
  }

  private fetchProduct(){
    this.isFetching = true;
    this.newproductservice.fetchProduct().subscribe((product) => {
      this.allProducts = product;
      this.isFetching = false;
    }, (err) => {
      this.errorMessage = err.message;
    });
    
  }

  onDeleteProducts(id: string){
    this.http.delete('https://chat-app-9728f-default-rtdb.firebaseio.com/product/'+id+'.json')
    .subscribe();
  }

  onDeleteAllProducts(){
    this.http.delete(this.url)
    .subscribe();
  }

  onEditClicked(id: string){
    this.currentProductID = id;
    let currentProduct = this.allProducts.find((p) => {
      return p.id === id
    });
    
    this.f.setValue({
      pName: currentProduct.pName,
      desc: currentProduct.desc,
      price: currentProduct.price,
      type: currentProduct.type,
      status: currentProduct.status,
    });

    this.editMode = true;
  
  }

  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }

}
