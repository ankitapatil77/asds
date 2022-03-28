
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { User } from '../model/user';
import { throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginUrl : string = '';
  signUpUrl : string = '';
  httpClient: any;
  url: any;

  constructor(private http : HttpClient) {

    this.loginUrl = "http://localhost:8080/login";
    this.signUpUrl = "http://localhost:8080/register";

  }

  login(user : User) : Observable<any> {
    return this.http.post<any>(this.loginUrl,user);
  }

  signUp(user : User) : Observable<any> {
    return this.http.post<any>(this.signUpUrl,user);
  }
  
  getLoginData(){
    return this.httpClient.get(`${this.url}/login`).pipe(
      catchError(this.errorHandle)
    );
  }
  errorHandle(error:HttpErrorResponse){
    
    return throwError(error.message || 'server error');
  }
}