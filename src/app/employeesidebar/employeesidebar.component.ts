import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeesidebar',
  templateUrl: './employeesidebar.component.html',
  styleUrls: ['./employeesidebar.component.scss']
})
export class EmployeesidebarComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver ,private route : Router) {}
 

  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem("token");
    this.route.navigate(['/header']);
  }

}
