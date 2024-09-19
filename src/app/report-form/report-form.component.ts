import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { ReportService } from '../services/report.service';

@Component({
  selector: 'app-report-form',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule ],
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.css']
})

export class ReportFormComponent implements OnInit {
  reportForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private reportService: ReportService
  ) {
    this.reportForm = this.fb.group({
      id: [null],
      title: ['', Validators.required],
      type: ['', Validators.required],
      description: ['']
    });
  }

  get title() {
    return this.reportForm.get('title');
  }

  get type() {
    return this.reportForm.get('type');
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.reportService.getReport(+id).subscribe(report => {
        if (report) {
          this.reportForm.patchValue(report);
        }
      });
    }
  }

  onSubmit() {
    if (this.reportForm.valid) {
      const formValue = this.reportForm.value;
      if (formValue.id) {
        this.reportService.updateReport(formValue).subscribe(() => {
          this.router.navigate(['/reports']);
        });
      } else {
        this.reportService.addReport(formValue).subscribe(() => {
          this.router.navigate(['/reports']);
        });
      }
    }
  }

  onCancel() {
    this.router.navigate(['/reports']);
  }
}
