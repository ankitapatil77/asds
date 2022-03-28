import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http'
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  getAddEmployee() {
    throw new Error('Method not implemented.');
  }
  url: any;

  

  constructor(private httpClient: HttpClient) { }
  private baseURL = "http://localhost:8080/api/v1/";
  getEmployeesList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`+'/employees');
  }

  createEmployee(employee: Employee): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`+'/employees', employee);
  }

  getEmployeeById(id: number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/employees/${id}`);
  }

  updateEmployee(id: number, employee: Employee): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/employees/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}`+ `employees/${id}`);
  }

  getEmployeeData(){
    return this.httpClient.get(`${this.url}/api/Employee-list`).pipe(
      catchError(this.errorHandle)
    );
  }
  errorHandle(error:HttpErrorResponse){
    
    return throwError(error.message || 'server error');
  }
}