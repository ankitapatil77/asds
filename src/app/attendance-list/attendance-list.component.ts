import { Component, OnInit } from '@angular/core';
import { Attendance} from '../attendance'
import { AttendanceService } from '../attendance.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-attendance-list',
  templateUrl: './attendance-list.component.html',
  styleUrls: ['./attendance-list.component.scss']
})
export class AttendanceListComponent implements OnInit {

  
  attendances: Attendance[] = [];

  constructor(private attendanceService: AttendanceService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAttendances();
  }

  private getAttendances(){
    this.attendanceService.getAttendanceList().subscribe(data => {
      this.attendances = data;
    });
  }

  attendanceDetails(id: number){
    this.router.navigate(['attendance-details', id]);
  }

  updateAttendance(id: number){
    this.router.navigate(['update-attendance', id]);
  }

  deleteAttendance(id: number){
    this.attendanceService.deleteAttendance(id).subscribe( data => {
      console.log(data);
      this.getAttendances();
    })
  }

}
