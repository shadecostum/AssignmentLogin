import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupPageComponent } from './signup-page/signup-page.component';
import {HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserDashBoardComponent } from './DashBoard/user-dash-board/user-dash-board.component';
import { ProductComponent } from './Products/product/product.component';
import { SalesComponent } from './Sales/sales/sales.component';
import { UserComponent } from './User/user/user.component';
import { FormSalesComponent } from './Sales/form-sales/form-sales.component';
import { FormProductComponent } from './Products/form-product/form-product.component'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupPageComponent,
    UserDashBoardComponent,
    ProductComponent,
    SalesComponent,
    UserComponent,
    FormSalesComponent,
    FormProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
