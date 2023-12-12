import { Component } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { LoginServiceService } from '../Service/login-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  constructor(private loginService:LoginServiceService,private router:Router){}

  LoginForm=new FormGroup(
    {
      UserName:new FormControl('',[Validators.required]),
      Password:new FormControl('',[
        Validators.required,
        Validators.minLength(6),
      
       
      ])
    })

    errorMessage: string | undefined;
    get userNameValid()
    {
      return this.LoginForm.get('UserName');
    }

    get PasswordValid()
    {
      return this.LoginForm.get('Password');
    }

  UserNamePasswordInvalid:any


    loginFormSubmitFun(datas:any)
    {

      this.loginService.loginJson(datas).subscribe(
        {
          next:(res)=>
          {

            if (res) {
              console.log('Login successful!');

              alert("Sucess")
              this.router.navigateByUrl("/dashBoard")
              
            } 
            else
            {
              console.log("login username and password error");
              this.errorMessage = 'Invalid username or password';
              this.LoginForm.reset()
            }
          },
          error:(err:HttpErrorResponse)=>
          {
            console.log(err);
            
          }
        })
    }


}
