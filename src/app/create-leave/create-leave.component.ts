import { Component, OnInit } from '@angular/core';
import { Leave } from '../leave';
import { LeaveService } from '../leave.service';
import { Router } from '@angular/router';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-create-leave',
  templateUrl: './create-leave.component.html',
  styleUrls: ['./create-leave.component.scss']
})
export class CreateLeaveComponent implements OnInit {
  exform!: FormGroup;

  leave: Leave = new Leave();
  constructor(private leaveService: LeaveService,
    private router: Router) { }

  ngOnInit(): void {
    this.exform = new FormGroup({
      'fromdate': new FormControl(null, Validators.required),
      'todate': new FormControl(null, Validators.required),
      'leavetype': new FormControl(null, Validators.required),
      'reason':new FormControl(null, Validators.required),
      'status':new FormControl(null, Validators.required),
      
    });
  }

  saveLeave(){
    this.leaveService.createLeave(this.leave).subscribe( data =>{
      console.log(data);
      alert("Leave Added Successfully")
      this.goToLeaveList();
    },
    error => console.log(error));
  }
  //Leave(leave: any) {
    //throw new Error('Method not implemented.');
  //}

  goToLeaveList(){
    this.router.navigate(['/addleaves']);
  }
  
  clicksub() {
    console.log(this.leave);
    this.saveLeave();
  }
  get fromdate() {
    return this.exform.get('fromdate');
  }
  get todate() {
    return this.exform.get('todate');
  }
  get leavetype() {
    return this.exform.get('leavetype');
  }
  get reason() {
    return this.exform.get('reason');
  }
  get status() {
    return this.exform.get('status');
  }

}
