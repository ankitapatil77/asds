import {  NgModule} from '@angular/core';
import { NgForm } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AddattendanceComponent } from './addattendance/addattendance.component';
import { AddleavesComponent } from './addleaves/addleaves.component';
import { AddsalaryComponent } from './addsalary/addsalary.component';
import { AddscheduleComponent } from './addschedule/addschedule.component';

import { AdminsidebarComponent } from './adminsidebar/adminsidebar.component';
import { AttendanceDetailsComponent } from './attendance-details/attendance-details.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './component/user-dashboard/user-dashboard.component';
import { CreateAttendanceComponent } from './create-attendance/create-attendance.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { CreateLeaveComponent } from './create-leave/create-leave.component';
import { CreateSalaryComponent } from './create-salary/create-salary.component';
import { CreateScheduleComponent } from './create-schedule/create-schedule.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

import { EmployeesidebarComponent } from './employeesidebar/employeesidebar.component';
import { HeaderComponent } from './header/header.component';
import { LeaveDetailsComponent } from './leave-details/leave-details.component';
import { RegistersComponent } from './registers/registers.component';
import { SalaryDetailsComponent } from './salary-details/salary-details.component';
import { ScheduleDetailsComponent } from './schedule-details/schedule-details.component';
import { UpdateAttendanceComponent } from './update-attendance/update-attendance.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { UpdateLeaveComponent } from './update-leave/update-leave.component';
import { UpdateSalaryComponent } from './update-salary/update-salary.component';
import { UpdateScheduleComponent } from './update-schedule/update-schedule.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';
import { ViewattendanceComponent } from './viewattendance/viewattendance.component';
import { ViewleaveComponent } from './viewleave/viewleave.component';
import { ViewsalaryComponent } from './viewsalary/viewsalary.component';
import { ViewscheduleComponent } from './viewschedule/viewschedule.component';





const routes: Routes = [
  {path:'', redirectTo:'header', pathMatch:'full'},
  
  {path:"employee-list" , component:EmployeeListComponent},
  {path:"update-employee/:id", component:UpdateEmployeeComponent},
  {path:"create-employee", component:CreateEmployeeComponent},
  {path:"employee-details/:id", component:EmployeeDetailsComponent},

  {path:"addsalary", component:AddsalaryComponent},
  {path:"create-salary", component:CreateSalaryComponent},
  {path:"salary-details/:id", component:SalaryDetailsComponent},
  {path:"update-salary/:id", component:UpdateSalaryComponent},
  {path:"viewsalary", component:ViewsalaryComponent},

  {path:"addschedule", component:AddscheduleComponent},
  {path:"create-schedule", component:CreateScheduleComponent},
  {path:"update-schedule/:id", component:UpdateScheduleComponent},
  {path:"schedule-details/:id", component:ScheduleDetailsComponent},
  {path:"viewschedule", component:ViewscheduleComponent},

  {path:"addleaves", component:AddleavesComponent},
  {path:"leave-details/:id", component:LeaveDetailsComponent},
  {path:"create-leave", component:CreateLeaveComponent},
  {path:"update-leave/:id", component:UpdateLeaveComponent},
  {path:"viewleave",component:ViewleaveComponent},

  {path:"addattendance", component:AddattendanceComponent},
  {path:"create-attendance", component:CreateAttendanceComponent},
  {path:"attendance-details/:id", component:AttendanceDetailsComponent},
  {path:"update-attendance/:id", component:UpdateAttendanceComponent},
  {path:"viewattendance", component:ViewattendanceComponent},



  
  {path:"admin", component:AdminsidebarComponent},
  {path:"user", component:EmployeesidebarComponent},


  
  {path:"registers", component:RegistersComponent},

  {path:"updateprofile", component:UpdateprofileComponent},

  {path:"header", component:HeaderComponent},
  {path:"login", component:LoginComponent},
  {path:"signup", component:SignupComponent},
  {path:"admindashboard", component:AdminDashboardComponent},
  {path:"userdashboard", component:UserDashboardComponent}


  
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
