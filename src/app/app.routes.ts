import { Routes, RouterModule } from '@angular/router';
import { Todo } from './todo/todo.component';
import { ShoppingCart } from './shoppingCart/shoppingcart.component';

const Route_Const:Routes=[
  {path:'', redirectTo:'todo', pathMatch:'full'},
  {path:'todo', component: Todo},
  {path:'shop', component: ShoppingCart}
]

export const routing = RouterModule.forRoot(Route_Const)
