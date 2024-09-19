import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { DepartmentService } from '../services/department.service';

@Component({
  selector: 'app-department-form',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule],
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
      description: ['', Validators.required]
    });
  }

  get name() {
    return this.departmentForm.get('name');
  }

  get description() {
    return this.departmentForm.get('description');
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.departmentService.getDepartment(+id).subscribe(department => {
        if (department) {
          this.departmentForm.patchValue(department);
        }
      });
    }
  }

  onSubmit() {
    if (this.departmentForm.valid) {
      const formValue = this.departmentForm.value;
      if (formValue.id) {
        this.departmentService.updateDepartment(formValue).subscribe(() => {
          this.router.navigate(['/departments']);
        });
      } else {
        this.departmentService.addDepartment(formValue).subscribe(() => {
          this.router.navigate(['/departments']);
        });
      }
    }
  }

  onCancel() {
    this.router.navigate(['/departments']);
  }
}
