import { Component, OnInit } from '@angular/core';
import { Leave } from '../leave';
import { LeaveService } from '../leave.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addleaves',
  templateUrl: './addleaves.component.html',
  styleUrls: ['./addleaves.component.scss']
})
export class AddleavesComponent implements OnInit {

  leaves: Leave[] = [];

  constructor(private leaveService: LeaveService,
    private router: Router) { }

  ngOnInit(): void {
    this.getLeaves();
  }

  private getLeaves(){
    this.leaveService.getLeavesList().subscribe(data => {
      this.leaves = data;
    });
  }

  leaveDetails(id: number){
    this.router.navigate(['leave-details', id]);
  }

  updateLeave(id: number){
    //console.log("updateleave called -",id);
    this.router.navigate(['update-leave', id]);
  }

  deleteLeave(id: number){
    //console.log("deleteleave called -",id);
    this.leaveService.deleteLeave(id).subscribe( data => {
      console.log(data);
      this.getLeave();
    })
  }
  getLeave() {
    throw new Error('Method not implemented.');
  }
}