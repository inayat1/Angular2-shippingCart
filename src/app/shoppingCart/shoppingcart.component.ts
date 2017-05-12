import { Component, OnInit } from '@angular/core';
import { ProductList }  from './item.service';
import { HttpService } from '../http.service';
@Component({
  selector: 'shopping-cart',
  templateUrl: 'app/shoppingCart/shopping.component.html'
})
export class ShoppingCart implements OnInit {
  private productArr:any=['inayat'];
  private product:any;
  constructor(private productlist: ProductList, private http: HttpService) {}
  ngOnInit () {
     this.http.getdata('../item.json').subscribe(function(data){
         this.productArr = data;
         console.log(this.productArr);
      });
  }
  itemSearched(item:any) {
    this.product=item;
  }
}
