import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { SalesServiceService } from 'src/app/Service/sales-service.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent {
  SalestDataStore:any;


  constructor(private auth:SalesServiceService)
  {
    auth.getSalesdetails().subscribe(
      {
        next:(res)=>
        {
          this.SalestDataStore=res;
          console.log(this.SalestDataStore);
          
        },
        error:(err:HttpErrorResponse)=>
        {
          console.log(err);
          
        }
      }
    )
  }



  isFormVisible=false;
  showForm()
  {
    this.isFormVisible=true
  }
}
