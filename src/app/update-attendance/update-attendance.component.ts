import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../attendance.service';
import { Attendance } from '../attendance';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-attendance',
  templateUrl: './update-attendance.component.html',
  styleUrls: ['./update-attendance.component.scss']
})
export class UpdateAttendanceComponent implements OnInit {

  id!: number;
  attendance: Attendance = new Attendance;
  constructor(private attendanceService: AttendanceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.attendanceService.getAttendanceById(this.id).subscribe(data => {
      this.attendance = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.attendanceService.updateAttendance(this.id, this.attendance).subscribe( data =>{
      alert("Attendance Updated Successfully")
      this.goToAttendanceList();
    }
    , error => console.log(error));
  }

  goToAttendanceList(){
    this.router.navigate(['/addattendance']);
  }

}
