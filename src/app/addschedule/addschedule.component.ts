import { Component, OnInit } from '@angular/core';
import { Schedule } from '../schedule';
import { ScheduleService } from '../schedule.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addschedule',
  templateUrl: './addschedule.component.html',
  styleUrls: ['./addschedule.component.scss']
})
export class AddscheduleComponent implements OnInit {

  schedule: Schedule[] = [];

   constructor(private scheduleService: ScheduleService,
    private router: Router) { }

    ngOnInit(): void {
      this.getSchedules();
    }

    private getSchedules(){
      this.scheduleService.getScheduleList().subscribe(data => {
        this.schedule = data;
      });
    }

    scheduleDetails(id: number){
      this.router.navigate(['schedule-details', id]);
    }
  
    updateSchedule(id: number){
      this.router.navigate(['update-schedule', id]);
    }
  
    deleteSchedule(id: number){
      this.scheduleService.deleteSchedule(id).subscribe( data => {
        console.log(data);
        this.getSchedules();
      })
    }

}
