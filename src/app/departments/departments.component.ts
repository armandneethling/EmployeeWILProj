import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departments',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent {
  constructor(private router: Router) {}

  viewDepartment() {
    this.router.navigate(['/department-list']);
  }

  goToDepartmentForm() {
    this.router.navigate(['/department-form']);
  }
}
