import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductServiceService } from 'src/app/Service/product-service.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent  implements OnInit{
 
  ProductDataArray:any[]=[]
 
  ngOnInit(): void {

    this.getProductDetails();
    
  }

  productForm =new FormGroup(
    {
      ProductName:new FormControl('',Validators.required),
      Quantity:new FormControl('',Validators.required),
      Price:new FormControl('',[Validators.required,Validators.min(1)])
    }
  )

get ProductNameValid()
{
  return this.productForm.get('ProductName')
}
get QuantityValid()
{
  return this.productForm.get('Quantity')
}
get PriceValid()
{
  return this.productForm.get('Price')
}

constructor(private auth:ProductServiceService){}


getProductDetails()
{
 this.ProductDataArray=this.auth.getProductDetailsForm();
}




onSubmit()
{

  if(this.productForm.valid)
  {
    const ProductFormData={
      ProductName:this.productForm.get('ProductName')!.value,
      Quantity:this.productForm.get('Quantity')!.value,
      Price:this.productForm.get('Price')!.value
    }

    this.auth.addProductDetails(ProductFormData)

    this.productForm.reset();

  }
}

}
