import { Component, OnInit } from '@angular/core';
import { Schedule } from '../schedule';
import { ScheduleService } from '../schedule.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-schedule-details',
  templateUrl: './schedule-details.component.html',
  styleUrls: ['./schedule-details.component.scss']
})
export class ScheduleDetailsComponent implements OnInit {

  id!: number;
  schedule!: Schedule;
  constructor(private route: ActivatedRoute, private scheduleService: ScheduleService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.schedule = new Schedule();
    this.scheduleService.getScheduleById(this.id).subscribe( data => {
      this.schedule = data;
    });
  }

}
