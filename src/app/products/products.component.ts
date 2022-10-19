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
    {id:7, name: 'Coke', price: '200', status: 'Available', image: '/assets/products/coke.png'},
    {id:8, name: 'Fanta', price: '200', status: 'Not available', image: '/assets/products/fanta.png'},
    {id:9, name: 'Spirit', price: '200', status: 'Available', image: '/assets/products/sprite.png'},
    {id:10, name: 'MtnDew', price: '150', status: 'Not available', image: '/assets/products/mtndew.png'},
    {id:11, name: 'Mirinda', price: '300', status: 'Available', image: '/assets/products/mirinda.png'},
    {id:12, name: 'Pepsi', price: '150', status: 'Not available', image: '/assets/products/pepsi.png'}
    
  ]


}
