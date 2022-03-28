import { Component, OnInit } from '@angular/core';
import { Attendance } from '../attendance';
import { AttendanceService } from '../attendance.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewattendance',
  templateUrl: './viewattendance.component.html',
  styleUrls: ['./viewattendance.component.scss']
})
export class ViewattendanceComponent implements OnInit {

  attendance: Attendance[] = [];

   constructor(private attendanceService: AttendanceService,
    private router: Router) { }

    ngOnInit(): void {
      this.getAttendance();
    }

    private getAttendance(){
      this.attendanceService.getAttendanceList().subscribe(data => {
        this.attendance = data;
      });
    }

    attendanceDetails(id: number){
      this.router.navigate(['attendance-details', id]);
    }

}
