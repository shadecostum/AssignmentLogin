import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http:HttpClient) { }


 private productUrl="assets/product.json"

 public getProductDetails()
 {
  return this.http.get(this.productUrl);
 }


ProductsArrayStore:any[]=[]

 public getProductDetailsForm():any[]
 {
  return this.ProductsArrayStore
 }

 addProductDetails(productValue:any)
 {
  this.ProductsArrayStore.push(productValue)
 }






}
