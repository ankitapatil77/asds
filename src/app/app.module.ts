import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { DragDropModule } from '@angular/cdk/drag-drop';


import { AddscheduleComponent } from './addschedule/addschedule.component';
import { AddsalaryComponent } from './addsalary/addsalary.component';
import { AddattendanceComponent } from './addattendance/addattendance.component';
import { AddleavesComponent } from './addleaves/addleaves.component';

import { AdminsidebarComponent } from './adminsidebar/adminsidebar.component';
import { EmployeesidebarComponent } from './employeesidebar/employeesidebar.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';
import { ViewattendanceComponent } from './viewattendance/viewattendance.component';
import { ViewsalaryComponent } from './viewsalary/viewsalary.component';
import { ViewscheduleComponent } from './viewschedule/viewschedule.component';

import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { CreateLeaveComponent } from './create-leave/create-leave.component';
import { LeaveDetailsComponent } from './leave-details/leave-details.component';
import { UpdateLeaveComponent } from './update-leave/update-leave.component';
import { RegistersComponent } from './registers/registers.component';
import { CreateAttendanceComponent } from './create-attendance/create-attendance.component';
import { AttendanceDetailsComponent } from './attendance-details/attendance-details.component';
import { UpdateAttendanceComponent } from './update-attendance/update-attendance.component';
import { CreateSalaryComponent } from './create-salary/create-salary.component';
import { SalaryDetailsComponent } from './salary-details/salary-details.component';
import { UpdateSalaryComponent } from './update-salary/update-salary.component';
import { CreateScheduleComponent } from './create-schedule/create-schedule.component';
import { UpdateScheduleComponent } from './update-schedule/update-schedule.component';
import { ScheduleDetailsComponent } from './schedule-details/schedule-details.component';

import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AttendanceListComponent } from './attendance-list/attendance-list.component';
import { ViewleaveComponent } from './viewleave/viewleave.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './component/user-dashboard/user-dashboard.component';










@NgModule({
  declarations: [
    
    AppComponent,
    
   
    AddscheduleComponent,
    AddsalaryComponent,
    AddattendanceComponent,
    AddleavesComponent,
    AdminsidebarComponent,
    EmployeesidebarComponent,
    UpdateprofileComponent,
 
    ViewattendanceComponent,
    ViewsalaryComponent,
    ViewscheduleComponent,
  
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    EmployeeDetailsComponent,
    CreateLeaveComponent,
    LeaveDetailsComponent,
    UpdateLeaveComponent,
    RegistersComponent,
    CreateAttendanceComponent,
    AttendanceDetailsComponent,
    UpdateAttendanceComponent,
    CreateSalaryComponent,
    SalaryDetailsComponent,
    UpdateSalaryComponent,
    CreateScheduleComponent,
    UpdateScheduleComponent,
    ScheduleDetailsComponent,
   
    EmployeeListComponent,
    AttendanceListComponent,
    ViewleaveComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    
    
   
  
    
    
    
    
    
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    DragDropModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
