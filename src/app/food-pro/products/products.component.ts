import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/ProductServices/services';
import { FoodProComponent } from '../food-pro.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  // route: any;

  constructor(private pro: ProductService, private route: ActivatedRoute) { }
  product: any;
  Id: number = 0;


  ngOnInit(): void {
    this.Id = this.route.snapshot.params['id'];
    // //this.courseId = this.route.snapshot.params['name'];
    this.product = this.pro.products.find(x => x.id == this.Id);
  }


  //  products = [
  //   {id:1, name: 'Rice', price: '200', status: 'Available', type:'food', image: '/assets/products/rice.png',  description: 'In this course you will learn the fundamentals of Angular framework. This course is purely designed for beginners and teaches you all the basic concepts of Angular step by step'},
  //   {id:2, name: 'Beans', price: '250', status: 'Not available', type:'food', image: '/assets/products/beans.png',  description: 'In this course you will learn the fundamentals of Angular framework. This course is purely designed for beginners and teaches you all the basic concepts of Angular step by step'},
  //   {id:3, name: 'Big Pizza', price: '6500', status: 'Available', type:'food', image: '/assets/products/pizza.png',  description: 'In this course you will learn the fundamentals of Angular framework. This course is purely designed for beginners and teaches you all the basic concepts of Angular step by step'},
  //   {id:4, name: 'Yam', price: '500', status: 'Not available', type:'food', image: '/assets/products/yam.png',  description: 'In this course you will learn the fundamentals of Angular framework. This course is purely designed for beginners and teaches you all the basic concepts of Angular step by step'},
  //   {id:5, name: 'Shawarma', price: '2500', status: 'Available', type:'food', image: '/assets/products/shawarma.png',  description: 'In this course you will learn the fundamentals of Angular framework. This course is purely designed for beginners and teaches you all the basic concepts of Angular step by step'},
  //   {id:6, name: 'Goat meat pepper soup', price: '1200', status: 'Not available', type:'food', image: '/assets/products/pepper.png',  description: 'In this course you will learn the fundamentals of Angular framework. This course is purely designed for beginners and teaches you all the basic concepts of Angular step by step'},
  //   {id:7, name: 'Coke', price: '200', status: 'Available', type:'drink', image: '/assets/products/coke.png',  description: 'In this course you will learn the fundamentals of Angular framework. This course is purely designed for beginners and teaches you all the basic concepts of Angular step by step'},
  //   {id:8, name: 'Fanta', price: '200', status: 'Not available', type:'drink', image: '/assets/products/fanta.png',  description: 'In this course you will learn the fundamentals of Angular framework. This course is purely designed for beginners and teaches you all the basic concepts of Angular step by step'},
  //   {id:9, name: 'Spirit', price: '200', status: 'Available', type:'drink', image: '/assets/products/sprite.png',  description: 'In this course you will learn the fundamentals of Angular framework. This course is purely designed for beginners and teaches you all the basic concepts of Angular step by step'},
  //   {id:10, name: 'MtnDew', price: '150', status: 'Not available', type:'drink', image: '/assets/products/mtndew.png',  description: 'In this course you will learn the fundamentals of Angular framework. This course is purely designed for beginners and teaches you all the basic concepts of Angular step by step'},
  //   {id:11, name: 'Mirinda', price: '300', status: 'Available', type:'drink', image: '/assets/products/mirinda.png',  description: 'In this course you will learn the fundamentals of Angular framework. This course is purely designed for beginners and teaches you all the basic concepts of Angular step by step'},
  //   {id:12, name: 'Pepsi', price: '150', status: 'Not available', type:'drink', image: '/assets/products/pepsi.png',  description: 'In this course you will learn the fundamentals of Angular framework. This course is purely designed for beginners and teaches you all the basic concepts of Angular step by step'}
    
  // ]

}
