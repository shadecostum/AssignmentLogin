import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ProductServiceService } from 'src/app/Service/product-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  productDataStore:any;
  constructor(private auth:ProductServiceService)
  {
    auth.getProductDetails().subscribe(
      {
        next:(res)=>
        {
          console.log(res);
          this.productDataStore=res
          
        },
        error:(err:HttpErrorResponse)=>
        {
          console.log(err); 
          
        }
      }
    )
  }

  showForm()
  {

  }

  isFormVisible=false



  




}
