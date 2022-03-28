import { Component, OnInit } from '@angular/core';
import { Attendance } from '../attendance';
import { AttendanceService } from '../attendance.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-attendance-details',
  templateUrl: './attendance-details.component.html',
  styleUrls: ['./attendance-details.component.scss']
})
export class AttendanceDetailsComponent implements OnInit {

  id!: number;
  attendance!: Attendance;
  constructor(private route: ActivatedRoute, private attendanceService: AttendanceService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.attendance = new Attendance();
    this.attendanceService.getAttendanceById(this.id).subscribe( data => {
      this.attendance = data;
    });
  }

}
