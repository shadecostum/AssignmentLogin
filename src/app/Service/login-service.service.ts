import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http:HttpClient) { }

  private loginUrl = 'assets/login.json';

  public loginJson(data: any): Observable<boolean> {
    return this.http.get<User[]>(this.loginUrl).pipe(
      map((users: User[]) => {
        return users.some(user => user.UserName === data.UserName && user.Password === data.Password);
      })
    );
  }


}
interface User {
  Id: number;
  UserName: string;
  Password: string;
}
