import { Component, OnInit } from '@angular/core';
import { Salary } from '../salary';
import { SalaryService } from '../salary.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewsalary',
  templateUrl: './viewsalary.component.html',
  styleUrls: ['./viewsalary.component.scss']
})
export class ViewsalaryComponent implements OnInit {

  salary : Salary[] = [];

   constructor(private salaryService: SalaryService,
    private router: Router) { }

    ngOnInit(): void {
      this.getSalary();
    }

    private getSalary(){
      this.salaryService.getSalaryList().subscribe(data => {
        this.salary = data;
      });
    }

    salaryDetails(id: number){
      this.router.navigate(['salary-details', id]);
    }

}
