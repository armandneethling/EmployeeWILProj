import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { DepartmentService } from '../services/department.service';

@Component({
  selector: 'app-department-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.css']
})
export class DepartmentFormComponent implements OnInit {
  departmentForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private departmentService: DepartmentService
  ) {
    this.departmentForm = this.fb.group({
      id: [null],
      name: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    // Check if we are editing an existing department
    const departmentId = this.route.snapshot.paramMap.get('id');
    if (departmentId) {
      this.departmentService.getDepartment(+departmentId).subscribe(department => {
        this.departmentForm.patchValue(department);
      });
    }
  }

  get name() {
    return this.departmentForm.get('name');
  }

  onSubmit(): void {
    if (this.departmentForm.valid) {
      const department = this.departmentForm.value;
      console.log('Submitting Department:', department);

      if (department.id) {
        this.departmentService.updateDepartment(department).subscribe(
          (response) => {
            console.log('Department updated successfully', response);
            this.router.navigate(['/departments']);
          },
          (error) => {
            console.error('Error updating department', error);
          }
        );
      } else {
        this.departmentService.addDepartment(department).subscribe(
          (response) => {
            console.log('Department added successfully', response);
            this.router.navigate(['/departments']);
          },
          (error) => {
            console.error('Error adding department', error);
          }
        );
      }
    } else {
      console.error('Form is invalid', this.departmentForm.errors);
    }
  }

  onCancel(): void {
    this.router.navigate(['/departments']);
  }
}
