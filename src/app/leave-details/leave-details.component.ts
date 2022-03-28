import { Component, OnInit } from '@angular/core';
import { Leave} from '../leave';
import { ActivatedRoute } from '@angular/router';
import { LeaveService } from '../leave.service';

@Component({
  selector: 'app-leave-details',
  templateUrl: './leave-details.component.html',
  styleUrls: ['./leave-details.component.scss']
})
export class LeaveDetailsComponent implements OnInit {

  id!: number;
  leave!: Leave;
  constructor(private route: ActivatedRoute, private leaveService: LeaveService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.leave = new Leave();
    this.leaveService.getLeaveById(this.id).subscribe( data => {
      this.leave = data;
    });
  }

}
