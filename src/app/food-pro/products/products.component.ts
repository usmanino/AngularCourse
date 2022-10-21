import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CurrencyType, ProductService } from 'src/app/ProductServices/services';
import { FoodProComponent } from '../food-pro.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 
  // route: any;

  constructor(private pro: ProductService, private activatedRoute: ActivatedRoute, private currencyType: CurrencyType, private router: Router ) { }
  product: any;
  Id: any;
  currency:any;
  RouteParamObs: any;
  editMode:boolean = false;


  ngOnInit(): void {
    // this.Id = this.route.snapshot.params['id'];
    // this.product = this.pro.products.find(x => x.id == this.Id);
    // this.currency = this.currencyType.currency;
    this.RouteParamObs =  this.activatedRoute.paramMap.subscribe((param) =>{
      this.currency = this.currencyType.currency;
      this.Id = param.get('id');
      this.product = this.pro.products.find(x => x.id == this.Id);
    });

    // this.editMode = Boolean(this.activatedRoute.snapshot.queryParamMap.get('edit'));
    this.activatedRoute.queryParamMap.subscribe((param) =>{
      this.editMode = Boolean(param.get('edit'));
    });
  }

  ngOnDestroy(){
    this.RouteParamObs.unsubscribe();
  }

  appendQueryParam(){
    this.router.navigate(['/Product', this.Id], {queryParams: {edit: true}})
  }



}
