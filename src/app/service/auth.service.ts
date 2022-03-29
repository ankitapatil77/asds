
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
  getAllUrl : string = '';
  httpClient: any;
  url: any;
  private baseURL = "http://localhost:8080/users";
  constructor(private http : HttpClient) {

    this.loginUrl = "http://localhost:8080/login";
    this.signUpUrl = "http://localhost:8080/register";
    this.getAllUrl = "http://localhost:8080/users";

  }

  login(user : User) : Observable<any> {
    return this.http.post<any>(this.loginUrl,user);
  }

  signUp(user : User) : Observable<any> {
    return this.http.post<any>(this.signUpUrl,user);
  }
  getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.getAllUrl}`);
  }

  deleteUser(id: string): Observable<Object>{
    return this.http.delete(`${this.getAllUrl}`+ `/${id}`);
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