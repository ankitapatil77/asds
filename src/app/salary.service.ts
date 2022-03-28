import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http'
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs';
import { Salary } from './salary'

@Injectable({
  providedIn: 'root'
})
export class SalaryService {
  getAddEmployee() {
    throw new Error('Method not implemented.');
  }
  url: any;

  private baseURL = "http://localhost:8080/api/v1/";

  constructor(private httpClient:HttpClient) { }

  getSalaryList(): Observable<Salary[]>{
    return this.httpClient.get<Salary[]>(`${this.baseURL}`+`/salarys`);
  }

  createSalary(salary: Salary): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`+'salarys', salary);
  }

  getSalaryById(id: number): Observable<Salary>{
    return this.httpClient.get<Salary>(`${this.baseURL}/salarys/${id}`);
  }

  updateSalary(id: number, salary: Salary): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/salarys/${id}`, salary);
  }

  deleteSalary(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}`+`salarys/${id}`);
  }

  getSalaryData(){
    return this.httpClient.get(`${this.url}/api/Addsalary`).pipe(
      catchError(this.errorHandle)
    );
  }
  errorHandle(error:HttpErrorResponse){
    
    return throwError(error.message || 'server error');
  }

}
