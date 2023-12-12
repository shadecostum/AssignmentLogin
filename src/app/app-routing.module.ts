import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserDashBoardComponent } from './DashBoard/user-dash-board/user-dash-board.component';
import { SalesComponent } from './Sales/sales/sales.component';
import { ProductComponent } from './Products/product/product.component';
import { UserComponent } from './User/user/user.component';
import { FormProductComponent } from './Products/form-product/form-product.component';
import { FormSalesComponent } from './Sales/form-sales/form-sales.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  {
    path: "dashBoard",
    component: UserDashBoardComponent,
    children: [

      { path: "", redirectTo: "dashBoard", pathMatch: "full" },
      {path:"users",component:UserComponent},
      { path: "product", component: ProductComponent },
      { path: "sales", component: SalesComponent },
      { path: "formProduct", component: FormProductComponent },
      { path: "formSale", component: FormSalesComponent },
    ]
  },
  { path: '**', redirectTo: 'dashBoard' } 
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
