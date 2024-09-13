import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-list',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css']
})
export class ReportListComponent {
  reports = [
    { id: 1, title: 'Monthly Employee Performance', type: 'Employee' },
    { id: 2, title: 'Department Budget Analysis', type: 'Department' },
    // Add more reports as needed
  ];

  constructor(private router: Router) {}

  editReport(reportId: number) {
    this.router.navigate(['/reports/edit', reportId]);
  }

  deleteReport(reportId: number) {
    // Logic to delete the report
    console.log('Deleted report with ID:', reportId);
  }
}
