import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  username : string = '';
  name : string ='';
  password : string = '';
  role : string = '';
  token: string ='';
  users: User[] =[];
  route: any;
  user : User = new User();


  constructor(private authserv:AuthService , private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }


  private getUsers(){
    this.authserv.getAllUsers().subscribe((data: User[]) => {
      this.users=data;
      console.log(data);
    });
    this.router.navigate(['/userDetails']);
  }

   deleteUser(id : string){
    this.authserv.deleteUser(id)
    .subscribe((data: any) => {
     
      
    });
    alert("deleted");
    this.router.navigate(['/userDetails']);
  }
  logout() {
    localStorage.removeItem("token");
    this.route.navigate(['/']);
  }
}
