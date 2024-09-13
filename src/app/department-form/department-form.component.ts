import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-form',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule],
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.css']
})
export class DepartmentFormComponent {
  departmentForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.departmentForm = this.fb.group({
      id: [null],
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  get name() {
    return this.departmentForm.get('name');
  }

  get description() {
    return this.departmentForm.get('description');
  }

  onSubmit() {
    if (this.departmentForm.valid) {
      const formValue = this.departmentForm.value;
      // Logic to save or update the department
      console.log('Form submitted:', formValue);
      this.router.navigate(['/departments']);
    }
  }

  onCancel() {
    this.router.navigate(['/departments']);
  }
}
