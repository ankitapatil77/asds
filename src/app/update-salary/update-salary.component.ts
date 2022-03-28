import { Component, OnInit } from '@angular/core';
import { SalaryService } from '../salary.service';
import { Salary } from '../salary';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-salary',
  templateUrl: './update-salary.component.html',
  styleUrls: ['./update-salary.component.scss']
})
export class UpdateSalaryComponent implements OnInit {

  id!: number;
  salary: Salary = new Salary;
  constructor(private salaryService: SalaryService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.salaryService.getSalaryById(this.id).subscribe(data => {
      this.salary = data;
    
    }, error => console.log(error));
  }

  onSubmit(){
    this.salaryService.updateSalary(this.id, this.salary).subscribe( data =>{
      alert("Salary Updated Successfully")
      this.goToSalaryList();
    }
    , error => console.log(error));
  }

  goToSalaryList(){
    this.router.navigate(['/addsalary']);
  }

}
