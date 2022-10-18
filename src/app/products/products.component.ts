import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  currency:string = '₦';

  products = [
    {id:1, name: 'Rice', price: '200', status: 'Available', image: '/assets/products/rice.png'},
    {id:2, name: 'Beans', price: '250', status: 'Not available', image: '/assets/products/beans.png'},
    {id:3, name: 'Big Pizza', price: '6500', status: 'Available', image: '/assets/products/pizza.png'},
    {id:4, name: 'Yam', price: '500', status: 'Not available', image: '/assets/products/yam.png'},
    {id:5, name: 'Shawarma', price: '2500', status: 'Available', image: '/assets/products/shawarma.png'},
    {id:6, name: 'Goat meat pepper soup', price: '1200', status: 'Not available', image: '/assets/products/pepper.png'},

  ]

}
