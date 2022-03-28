import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.scss']
})
export class UpdateprofileComponent implements OnInit {


  employee: Employee[] = [];

   constructor(private employeeService: EmployeeService,
    private router: Router) { }

    ngOnInit(): void {
      this.getEmployee();
    }

    private getEmployee(){
      this.employeeService.getEmployeesList().subscribe(data => {
        this.employee = data;
      });
    }

    empoyeeDetails(id: number){
      this.router.navigate(['update-employee', id]);
    }
    updateEmployee(id: number){
      //console.log('<<><', id);
      this.router.navigate(['update-employee', id]);
    }
   

}
