import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Leave } from '../leave';
import { LeaveService } from '../leave.service';

@Component({
  selector: 'app-viewleave',
  templateUrl: './viewleave.component.html',
  styleUrls: ['./viewleave.component.scss']
})
export class ViewleaveComponent implements OnInit {

  leave: Leave[] = [];

  constructor(private leaveService: LeaveService,
   private router: Router) { }

   ngOnInit(): void {
     this.getLeave();
   }

   private getLeave(){
     this.leaveService.getLeavesList().subscribe(data => {
       this.leave = data;
     });
   }

   leaveDetails(id: number){
     this.router.navigate(['leave-details', id]);
   }

}
