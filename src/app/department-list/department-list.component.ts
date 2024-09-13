import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent {
  departments = [
    { id: 1, name: 'Human Resources', description: 'Handles employee relations and benefits.' },
    { id: 2, name: 'IT', description: 'Manages technology and IT infrastructure.' },
    // Add more departments as needed
  ];

  constructor(private router: Router) {}

  editDepartment(departmentId: number) {
    this.router.navigate(['/departments/edit', departmentId]);
  }

  deleteDepartment(departmentId: number) {
    // Logic to delete the department
    console.log('Deleted department with ID:', departmentId);
  }
}
