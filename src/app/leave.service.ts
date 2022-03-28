import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http'
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Leave } from './leave';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {
  getAddLeave() {
    throw new Error('Method not implemented.');
  }
  url: any;

  private baseURL = "http://localhost:8080/api/v1";

  constructor(private httpClient: HttpClient) { }
  
  getLeavesList(): Observable<Leave[]>{
    return this.httpClient.get<Leave[]>(`${this.baseURL}`+`/leaves`);
  }

  createLeave(leave: Leave): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`+'/leaves', leave);
  }

  getLeaveById(id: number): Observable<Leave>{
    return this.httpClient.get<Leave>(`${this.baseURL}/leaves/${id}`);
  }

  updateLeave(id: number, leave: Leave): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/leaves/${id}`, leave);
  }

  deleteLeave(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}`+`/leaves/${id}`);
  }

  getleaveData(){
    return this.httpClient.get(`${this.url}/api/Addleaves`).pipe(
      catchError(this.errorHandle)
    );
  }
  errorHandle(error:HttpErrorResponse){
    
    return throwError(error.message || 'server error');
  }
}
