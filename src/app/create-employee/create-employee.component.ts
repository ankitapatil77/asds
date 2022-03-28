import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
  exform!: FormGroup;
  form = new FormGroup({
    emp_name:new FormControl('touched',Validators.required)
  })
  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    this.exform = new FormGroup({
      'name' : new FormControl(null, Validators.required),
      'doj': new FormControl(null, Validators.required),
      'gender': new FormControl(null, Validators.required),
      'age':new FormControl(null, Validators.required),
      'designation':new FormControl(null, Validators.required),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'password' : new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  saveEmployee(){
    this.employeeService.createEmployee(this.employee)
    .subscribe( data =>{
      console.log(data);
      alert("Employee Added Successfully")
      this.goToEmployeeList();
    },
    error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/employee-list']);
  }
  
  clicksub() {
    console.log(this.employee);
    this.saveEmployee();
  }
  get name() {
    return this.exform.get('name');
  }
  get doj() {
    return this.exform.get('doj');
  }
  get gender() {
    return this.exform.get('gender');
  }
  get age() {
    return this.exform.get('age');
  }
  get designation() {
    return this.exform.get('designation');
  }
  get email() {
    return this.exform.get('email');
  }
  get password() {
    return this.exform.get('password');
  }

}
