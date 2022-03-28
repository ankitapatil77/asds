import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../attendance.service';
import { Attendance } from '../attendance';
import {  Router } from '@angular/router';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-create-attendance',
  templateUrl: './create-attendance.component.html',
  styleUrls: ['./create-attendance.component.scss']
})
export class CreateAttendanceComponent implements OnInit {

  exform!: FormGroup;

  attendance: Attendance = new Attendance();
  constructor(private attendanceService: AttendanceService,
    private router: Router) { }

  ngOnInit(): void {

    this.exform = new FormGroup({
      'name' : new FormControl(null, Validators.required),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'date': new FormControl(null, Validators.required),
      'status': new FormControl(null, Validators.required),
      
    });
  }

  saveAttendance(){
    this.attendanceService.createAttendance(this.attendance).subscribe( data =>{
      console.log(data);
      alert("Attendence Added Successfully")
      this.goToAttendanceList();
    },
    error => console.log(error));
  }

  goToAttendanceList(){
    this.router.navigate(['/addattendance']);
  }
  
  clicksub() {
    console.log(this.attendance);
    this.saveAttendance();
  }
  get name() {
    return this.exform.get('name');
  }
  get email() {
    return this.exform.get('email');
  }
  get date() {
    return this.exform.get('date');
  }
  get status() {
    return this.exform.get('status');
  }

}
