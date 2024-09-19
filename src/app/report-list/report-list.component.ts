import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ReportService } from '../services/report.service';

@Component({
  selector: 'app-report-list',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css']
})

export class ReportListComponent implements OnInit {
  reports: any[] = [];

  constructor(
    private router: Router,
    private reportService: ReportService
  ) {}

  ngOnInit(): void {
    this.reportService.getReports().subscribe(reports => {
      this.reports = reports;
    });
  }

  editReport(reportId: number) {
    this.router.navigate(['/report-form', reportId]);
  }

  deleteReport(reportId: number) {
    this.reportService.deleteReport(reportId).subscribe(() => {
      this.reports = this.reports.filter(r => r.id !== reportId);
    });
  }
}
