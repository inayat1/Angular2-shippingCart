import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { Heading }  from './header/header.component';
import { Todo }  from './todo/todo.component';
import { TodoList }  from './todoList/todolist.component';
import { ShoppingCart }  from './shoppingCart/shoppingcart.component';
import { Search }  from './shoppingCart/search/search.component';
import { Filterlist }  from './shoppingCart/searchFilterPipe';
import { Itemlist }  from './shoppingCart/itemlist/itemlist.component';
import { ProductList }  from './shoppingCart/item.service';
import { Events }  from './events.service';
import { HttpModule }  from '@angular/http';
import { routing }  from './app.routes';
import { HttpService } from './http.service';
@NgModule({
  imports:      [ BrowserModule, FormsModule, routing, HttpModule],
  declarations: [ AppComponent,Heading, Todo, TodoList, ShoppingCart, Search, Itemlist, Filterlist ],
  bootstrap:    [ AppComponent ],
  providers: [ Events, ProductList, HttpService ]
})
export class AppModule { }
