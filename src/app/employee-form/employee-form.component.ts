import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { DepartmentService } from '../services/department.service';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})

export class EmployeeFormComponent implements OnInit {
  employeeForm: FormGroup;
  departments: any[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private departmentService: DepartmentService
  ) {
    this.employeeForm = this.fb.group({
      id: [null],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      position: ['', Validators.required],
      departmentId: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{3}-\d{3}-\d{4}$/)]]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.employeeService.getEmployee(+id).subscribe(employee => {
        if (employee) {
          this.employeeForm.patchValue(employee);
        }
      });
    }

    this.departmentService.getDepartments().subscribe(departments => {
      this.departments = departments;
    });
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      const employeeData = this.employeeForm.value;
      if (employeeData.id) {
        this.employeeService.updateEmployee(employeeData).subscribe(() => {
          this.router.navigate(['/employee-list']);
        });
      } else {
        this.employeeService.addEmployee(employeeData).subscribe(() => {
          this.router.navigate(['/employee-list']);
        });
      }
    }
  }
}
