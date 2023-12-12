import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalesServiceService {


  private salesDetailsUrl = "assets/sales.json";
  
  constructor(private http:HttpClient) { }


  public getSalesdetails()
  {
    return this.http.get(this.salesDetailsUrl)
  }

  public writeData(data: any) {
    return this.http.post(this.salesDetailsUrl, data);
  }

  salesDataStore:any[]=[]

  public getSalesDataDetails()
  {
    return this.salesDataStore
  }

  public AddSalesDetails(data:any)
  {
    this.salesDataStore.push(data)
  }

  public searchSalesById(id:any)
  {
   return this.salesDataStore.find(item => item.id === id);
  }

  updateData(updatedData: any): void {
    const indexToUpdate = this.salesDataStore.findIndex(item => item.id === updatedData.id);

    if (indexToUpdate !== -1) {
      // Update the existing object in the data array
      this.salesDataStore[indexToUpdate] = updatedData;
    } else {
      console.log('Error: Data with the selected ID not found.');
    }
  }

}


// department.model.ts
export interface Department {
  id: number;
  DepartmentName: string;
  EmployessCount: number;
  Address: string;
}
