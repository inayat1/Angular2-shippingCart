import { Component, Input } from '@angular/core';

@Component({
  selector: 'item-list',
  templateUrl: 'app/shoppingCart/Itemlist/Itemlist.component.html'
})
export class Itemlist {
  @Input() allProducts:any;
  @Input() searchProd:any;
}
