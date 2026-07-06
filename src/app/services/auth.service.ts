import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Illoginuser, Isignupuser } from '../models/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  AUTH_BASE_URL: string = environment.authBaseUrl
  constructor(
    private _http: HttpClient
  ) { }

  login(userdetails: Illoginuser): Observable<any> {
    let login_Url = `${this.AUTH_BASE_URL}/api/auth/login`
    return this._http.post(login_Url, userdetails)
  }

  signup(userdetails: Isignupuser): Observable<any> {
    let signup_Url = `${this.AUTH_BASE_URL}/api/auth/signup`
    return this._http.post(signup_Url, userdetails)
  }

  logout(): Observable<any> {
    localStorage.removeItem('token')
    localStorage.removeItem('userRole')
    return of({
      msg: `LogOut Succefully!`
    })
  }

  fetchpost(): Observable<any> {
    return this._http.get(`https://jsonplaceholder.typicode.com/posts`)
  }

  saveToken(token: string) {
    localStorage.setItem('token', token)
  }

  saveUserrole(userRole: string) {
    localStorage.setItem('userRole', userRole)
  }

  getToken():string | null{
    return localStorage.getItem('token')
  }
  getuserRole():string | null{
   return localStorage.getItem('userRole')
  }
}