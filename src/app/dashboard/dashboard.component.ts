import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private router: Router) {}

  goToEmployeeList() {
    this.router.navigate(['/employees']);
  }
  goToDepartments() {
    this.router.navigate(['/departments']);
  }
  goToReports() {
    this.router.navigate(['/reports']);
  }
}
