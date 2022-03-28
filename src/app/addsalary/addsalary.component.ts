import { Component, OnInit } from '@angular/core';
import { Salary } from '../salary';
import { SalaryService } from '../salary.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addsalary',
  templateUrl: './addsalary.component.html',
  styleUrls: ['./addsalary.component.scss']
})
export class AddsalaryComponent implements OnInit {

  salary : Salary[] = [];

   constructor(private salaryService: SalaryService,
    private router: Router) { }

    ngOnInit(): void {
      this.getSalarys();
    }

    private getSalarys(){
      this.salaryService.getSalaryList().subscribe(data => {
        this.salary = data;
      });
    }

    salaryDetails(id: number){
      this.router.navigate(['salary-details', id]);
    }
  
    updateSalary(id: number){
      this.router.navigate(['update-salary', id]);
    }
  
    deleteSalary(id: number){
      this.salaryService.deleteSalary(id).subscribe( data => {
        console.log(data);
        this.getSalarys();
      })
    }

}
