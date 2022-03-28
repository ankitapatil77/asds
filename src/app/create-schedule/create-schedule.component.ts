import { Component, OnInit } from '@angular/core';
import { Schedule } from '../schedule';
import { ScheduleService } from '../schedule.service';
import { Router } from '@angular/router';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-create-schedule',
  templateUrl: './create-schedule.component.html',
  styleUrls: ['./create-schedule.component.scss']
})
export class CreateScheduleComponent implements OnInit {

  exform!: FormGroup;

  schedule: Schedule = new Schedule();
  constructor(private scheduleService: ScheduleService,
    private router: Router) { }

  ngOnInit(): void {

    this.exform = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'date': new FormControl(null, Validators.required),
      'time': new FormControl(null, Validators.required),
      'shift':new FormControl(null, Validators.required),
      'work':new FormControl(null, Validators.required),
      
    });
  }

  saveSchedule(){
    this.scheduleService.createSchedule(this.schedule).subscribe( data =>{
      console.log(data);
      alert("Schedule Added Successfully")
      this.goToScheduleList();
    },
    error => console.log(error));
  }

  goToScheduleList(){
    this.router.navigate(['/addschedule']);
  }
  
  clicksub() {
    console.log(this.schedule);
    this.saveSchedule();
  }
  get name() {
    return this.exform.get('name');
  }
  get date() {
    return this.exform.get('date');
  }
  get time() {
    return this.exform.get('time');
  }
  get shift() {
    return this.exform.get('shift');
  }
  get work() {
    return this.exform.get('work');
  }

}
