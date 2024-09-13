import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent {
  reports = [
    { id: 1, title: 'Employee Performance', description: 'Performance metrics for employees.' },
    { id: 2, title: 'Department Overview', description: 'Overview of departmental metrics.' }
  ];

  constructor(private router: Router) {}

  viewReport() {
    this.router.navigate(['/report-list']);
  }

  goToReportForm() {
    this.router.navigate(['/report-form']);
  }
}
