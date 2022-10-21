import { Component, OnInit } from '@angular/core';
import { CurrencyType, ProductService } from '../ProductServices/services';

@Component({
  selector: 'app-food-pro',
  templateUrl: './food-pro.component.html',
  styleUrls: ['./food-pro.component.css']
})
export class FoodProComponent implements OnInit {

  constructor(private productService: ProductService, private currencyType: CurrencyType) { }

  product: any;
  currency:any;

  ngOnInit(): void {
    this.product = this.productService.products;
    this.currency = this.currencyType.currency;
  }


 
}
