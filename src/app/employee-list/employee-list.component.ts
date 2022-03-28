import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee'
import { EmployeeService } from '../employee.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];
  route: any;

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    });
  }

  employeeDetails(id: number){
    //console.log('<<><', id);
    this.router.navigate(['employee-details', id]);
    
  }

  updateEmployee(id: number){
    //console.log('<<><', id);
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(id: number){
    //console.log('<<><', id);
    this.employeeService.deleteEmployee(id) 
    .subscribe( data => {
      alert("Employee Deleted Successfully")
      console.log(data);
      this.getEmployees();
      
      
    })
  }
  
  

  logout() {
    localStorage.removeItem("token");
    this.route.navigate(['/header']);
  }
}
