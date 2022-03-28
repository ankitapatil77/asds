import { Component, OnInit } from '@angular/core';
import { Schedule } from '../schedule';
import { ScheduleService } from '../schedule.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewschedule',
  templateUrl: './viewschedule.component.html',
  styleUrls: ['./viewschedule.component.scss']
})
export class ViewscheduleComponent implements OnInit {

  schedule: Schedule[] = [];

   constructor(private scheduleService: ScheduleService,
    private router: Router) { }

    ngOnInit(): void {
      this.getSchedule();
    }

    private getSchedule(){
      this.scheduleService.getScheduleList().subscribe(data => {
        this.schedule = data;
      });
    }

    scheduleDetails(id: number){
      this.router.navigate(['schedule-details', id]);
    }
  
    


}
