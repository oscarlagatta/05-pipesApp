import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {BasicsPageComponent} from "./pages/basics-page/basics-page.component";
import {NumbersPageComponent} from "./pages/numbers-page/numbers-page.component";
import {OrderComponent} from "./pages/order/order.component";
import {UnCommonPageComponent} from "./pages/uncommon-page/uncommon-page.component";


const ROUTES: Routes = [
  {
    path: '', component: BasicsPageComponent
  },
  {
    path: 'numbers', component: NumbersPageComponent
  },
  {
    path: 'uncommon', component: UnCommonPageComponent
  },
  {
    path: 'custom', component: OrderComponent
  },
  {
    path: '**', redirectTo: ''
  },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(ROUTES)
  ]
})
export class ProductsRoutingModule {
}
