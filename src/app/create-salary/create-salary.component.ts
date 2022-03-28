import { Component, OnInit } from '@angular/core';
import { SalaryService } from '../salary.service';
import { Salary } from '../salary';
import {  Router } from '@angular/router';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-create-salary',
  templateUrl: './create-salary.component.html',
  styleUrls: ['./create-salary.component.scss']
})
export class CreateSalaryComponent implements OnInit {
  exform!: FormGroup;
  salary: Salary = new Salary();
  constructor(private salaryService: SalaryService,
    private router: Router) { }

  ngOnInit(): void {
    this.exform = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'basicpay': new FormControl(null, Validators.required),
      'deductions': new FormControl(null, Validators.required),
      'netpay':new FormControl(null, Validators.required),
      'month':new FormControl(null, Validators.required),
      
    });
  }

  saveSalary(){
    this.salaryService.createSalary(this.salary).subscribe( data =>{
      console.log(data);
      alert("Salary Added Successfully")
      this.goToSalaryList();
    },
    error => console.log(error));
  }

  goToSalaryList(){
    this.router.navigate(['./addsalary']);
  }
  
  clicksub() {
    console.log(this.salary);
    this.saveSalary();
  }
  get name() {
    return this.exform.get('name');
  }
  get basicpay() {
    return this.exform.get('basicpay');
  }
  get deductions() {
    return this.exform.get('deductions');
  }
  get netpay() {
    return this.exform.get('netpay');
  }
  get month() {
    return this.exform.get('month');
  }

}
