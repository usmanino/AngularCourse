import { Component, OnInit } from '@angular/core';
import { ProductService } from '../ProductServices/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private productService: ProductService) { }

  product: any;


  ngOnInit(): void {
    this.product = this.productService.products;

  }

  currency:string = '₦';



  getTotalProducts(){
    return this.product.length;
  }

  getTotalFoods(){
    return this.product.filter((product: { type: string; }) => product.type === 'food').length;
  }

  getTotalDrinks(){
    return this.product.filter((product: { type: string; }) => product.type === 'drink').length;
  }

  productCountradioButton:string = 'All';
  searchText:string = '';

  onFilterRadioButtonChanged(data: string){
    this.productCountradioButton = data;
  }

  onSearchTextEntered(searchValue: string){
  this.searchText = searchValue;
  console.log(this.searchText);
  }

}

