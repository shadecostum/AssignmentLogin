import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserServiceService } from 'src/app/Service/user-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

userDataStore:any;
constructor(private auth:UserServiceService) {

  auth.getUserData().subscribe(
    {
      next:(res)=>
      {
        this.userDataStore=res
      },
      error:(err:HttpErrorResponse)=>
      {
        console.log(err);
        
      }
    }
  )
   
}


}
