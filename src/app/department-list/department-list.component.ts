import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DepartmentService } from '../services/department.service';

@Component({
  selector: 'app-department-list',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})

export class DepartmentListComponent implements OnInit {
  departments: any[] = [];

  constructor(
    private router: Router,
    private departmentService: DepartmentService
  ) {}

  ngOnInit(): void {
    this.departmentService.getDepartments().subscribe(departments => {
      this.departments = departments;
      console.log(this.departments);
    });

    this.departmentService.departmentAdded.subscribe(newDepartment => {
      this.departments.push(newDepartment);
    });
  }

  editDepartment(departmentId: number) {
    this.router.navigate(['/department-form', departmentId]);
  }

  deleteDepartment(departmentId: number) {
    this.departmentService.deleteDepartment(departmentId).subscribe(() => {
      this.departments = this.departments.filter(d => d.id !== departmentId);
    });
  }
}
