import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Attendance } from './attendance'

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  getAddAttendance() {
    throw new Error('Method not implemented.');
  }
  url: any;

  private baseURL = "http://localhost:8080/api/v1/";

  constructor(private httpClient:HttpClient) { }

  getAttendanceList(): Observable<Attendance[]>{
    return this.httpClient.get<Attendance[]>(`${this.baseURL}`+`/attendances`);
  }

  createAttendance(attendance: Attendance): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`+`/attendances`, attendance);
  }

  getAttendanceById(id: number): Observable<Attendance>{
    return this.httpClient.get<Attendance>(`${this.baseURL}/attendances/${id}`);
  }

  updateAttendance(id: number, attendance: Attendance): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/attendances/${id}`, attendance);
  }

  deleteAttendance(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}`+`attendances/${id}`);
  }

}
