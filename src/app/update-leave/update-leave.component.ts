import { Component, OnInit } from '@angular/core';
import { Leave} from '../leave';

import { LeaveService } from '../leave.service';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-update-leave',
  templateUrl: './update-leave.component.html',
  styleUrls: ['./update-leave.component.scss']
})
export class UpdateLeaveComponent implements OnInit {

  id!: number;
  leave: Leave = new Leave;
  constructor(private leaveService: LeaveService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.leaveService.getLeaveById(this.id).subscribe(data => {
      this.leave = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.leaveService.updateLeave(this.id, this.leave).subscribe( data =>{
      alert("Leave Updated Successfully")
      this.goToLeaveList();
    }
    , error => console.log(error));
  }

  goToLeaveList(){
    this.router.navigate(['/addleaves']);
  }

}
