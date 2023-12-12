import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }

  UserDetailsUrl="assets/user.json" 

  public getUserData()
  {
    return this.http.get(this.UserDetailsUrl)
  }



}
