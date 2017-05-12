import { HttpService } from '../http.service';
import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class ProductList {
  private productList:any[];
    constructor(private dataUrl: HttpService) {
    }
    getProductList() {
      return this.productList;
    }
    callazax() {
      this.dataUrl.getdata('../item.json').subscribe(function(data:any){
         this.productList = data;
         console.log(this.productList);
      });
    }
}
