import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-form',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule ],
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.css']
})
export class ReportFormComponent {
  reportForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.reportForm = this.fb.group({
      id: [null],
      title: ['', Validators.required],
      type: ['', Validators.required]
    });
  }

  get title() {
    return this.reportForm.get('title');
  }

  get type() {
    return this.reportForm.get('type');
  }

  onSubmit() {
    if (this.reportForm.valid) {
      const formValue = this.reportForm.value;
      // Logic to save or update the report
      console.log('Form submitted:', formValue);
      this.router.navigate(['/reports']);
    }
  }

  onCancel() {
    this.router.navigate(['/reports']);
  }
}
