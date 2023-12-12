import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent {



  
  SignUpForm=new FormGroup(
    {
      UserName:new FormControl('',[Validators.required]),
      Password:new FormControl('',[
        Validators.required,
        Validators.maxLength(6),
        this.PasswordStrengthCheck.bind(this)
      ])
    })



private  PasswordStrengthCheck(_control:any):any
{
  const value:string =_control.value;
  if(!value)
  {
    return null;
    
  }
}


SignUpFormSubmitFun(data:any)
{

}
}
