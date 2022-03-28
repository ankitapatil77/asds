import { Component, OnInit } from '@angular/core';
import { Attendance } from '../attendance';
import { AttendanceService } from '../attendance.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addattendance',
  templateUrl: './addattendance.component.html',
  styleUrls: ['./addattendance.component.scss']
})
export class AddattendanceComponent implements OnInit{

   attendance: Attendance[] = [];

   constructor(private attendanceService: AttendanceService,
    private router: Router) { }

    ngOnInit(): void {
      this.getAttendance();
    }

    private getAttendance(){
      this.attendanceService.getAttendanceList().subscribe(data => {
        this.attendance = data;
        console.log(data)
      });
    }

    attendanceDetails(id: number){
      this.router.navigate(['attendance-details', id]);
    }
  
    updateAttendance(id: number){
     
      this.router.navigate(['update-attendance', id]);
    }
  
    deleteAttendance(id: number){
     
      this.attendanceService.deleteAttendance(id)
      .subscribe( data => {
        console.log(data);
        this.getAttendance();
      })
    }

}
