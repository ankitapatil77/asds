import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username : string = '';
  password : string = '';
  role : string = '';
 
  user : User = new User();

  roles : string[];

  form = new FormGroup({
    emp_name:new FormControl('touched',Validators.required)
  })
  display = 'none'
  verifyModalData = {};
  httpClient: any;

  constructor(private authService : AuthService, private route : Router ) { 
    this.roles = [
      'admin',
      'employee'
    ]
  }

  ngOnInit(): void {
    this.username = '';
    this.password = '';
  }

  login() {
    this.user.username = this.username;
    this.user.password = this.password;
    this.user.role = this.role;

    this.authService.login(this.user).subscribe((res: { token: string; } | null) => {

      if(res == null) {
        alert("Uername or password is wrong");
        this.ngOnInit();
      }else {
        console.log("Login successful");
        localStorage.setItem("token",res.token);

        if(this.role == 'employee') {
          this.route.navigate(['/user']);
          alert('Login successful')
        } 

        if( this.role == 'admin') {
          this.route.navigate(['/admin']);
          alert('Admin Login successful')
        }

      }

    }, err => {
      alert("Login failed");
      this.ngOnInit();
    })

  }
 
}