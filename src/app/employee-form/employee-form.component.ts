import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent {
  employeeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.employeeForm = this.fb.group({
      id: [null], // Optional, if you want to handle IDs
      name: ['', Validators.required],
      position: ['', Validators.required],
      department: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{3}-\d{3}-\d{4}$/)]]
    });
  }

  get name() {
    return this.employeeForm.get('name');
  }

  get position() {
    return this.employeeForm.get('position');
  }

  get department() {
    return this.employeeForm.get('department');
  }

  get email() {
    return this.employeeForm.get('email');
  }

  get phone() {
    return this.employeeForm.get('phone');
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      const employeeData = this.employeeForm.value;
      // Your logic to handle form submission
      console.log('Employee Data:', employeeData);
    }
  }

  // Optional method to populate the form for editing
  populateForm(employee: any) {
    this.employeeForm.patchValue(employee);
  }
}
