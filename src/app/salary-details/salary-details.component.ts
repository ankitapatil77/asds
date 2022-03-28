import { Component, OnInit } from '@angular/core';
import { Salary } from '../salary';
import { SalaryService } from '../salary.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-salary-details',
  templateUrl: './salary-details.component.html',
  styleUrls: ['./salary-details.component.scss']
})
export class SalaryDetailsComponent implements OnInit {

  id!: number;
  salary!: Salary;
  constructor(private route: ActivatedRoute, private salaryService: SalaryService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.salary = new Salary();
    this.salaryService.getSalaryById(this.id).subscribe( data => {
      this.salary = data;
    });
  }

}
