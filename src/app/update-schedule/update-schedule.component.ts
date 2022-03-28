import { Component, OnInit } from '@angular/core';
import { Schedule } from '../schedule';
import { ScheduleService } from '../schedule.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-schedule',
  templateUrl: './update-schedule.component.html',
  styleUrls: ['./update-schedule.component.scss']
})
export class UpdateScheduleComponent implements OnInit {

  id!: number;
  schedule: Schedule = new Schedule;
  constructor(private scheduleService:ScheduleService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.scheduleService.getScheduleById(this.id).subscribe(data => {
      this.schedule = data;
      
    }, error => console.log(error));
  }

  onSubmit(){
    this.scheduleService.updateSchedule(this.id, this.schedule).subscribe( data =>{
      alert("Schedule Updated Successfully")
      this.goToscheduleList();
    }
    , error => console.log(error));
  }

  goToscheduleList(){
    this.router.navigate(['../addschedule']);
  }


}
