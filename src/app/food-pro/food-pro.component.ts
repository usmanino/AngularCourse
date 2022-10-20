import { Component, OnInit } from '@angular/core';
import { ProductService } from '../ProductServices/services';

@Component({
  selector: 'app-food-pro',
  templateUrl: './food-pro.component.html',
  styleUrls: ['./food-pro.component.css']
})
export class FoodProComponent implements OnInit {

  constructor(private productService: ProductService) { }

  product: any;

  ngOnInit(): void {
    this.product = this.productService.products;
  }


 
}
