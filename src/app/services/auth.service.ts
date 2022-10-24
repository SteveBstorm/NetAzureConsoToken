import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url :string = "http://localhost:5128/api/"
  constructor(
    private client : HttpClient
  ) { }

  Login() {
    this.client.post<ConnectedUser>(this.url+"user/login", {email : 'admin@test.com', password : 'test1234'})
    .subscribe({
      next : (data : ConnectedUser) => {
        console.log(data)
        localStorage.setItem("token", data.token)
        sessionStorage.setItem("token", data.token)
        localStorage.setItem("nick", data.nickName)

        let mytoken : any = jwt_decode(data.token)
        console.log(mytoken)
        console.log(new Date(Number.parseInt(mytoken.exp)*1000))
      }
    })
  }

  Logout() {
    localStorage.clear()
  }

  getAllMovie() : Observable<any> {
    // const myHeaders = new HttpHeaders({
    //   'Authorization': 'Bearer '+ localStorage.getItem('token')
    // })
    return this.client.get<any>(this.url+"movie")
    // return this.client.get<any>(this.url+"movie", {headers :  myHeaders})
  }
}

export interface ConnectedUser {
  id : number
  token : string
  nickName : string
}
