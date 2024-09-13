import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})

export class EmployeeListComponent {
  employees = [
    { id: 1,
      name: 'John Doe',
      position: 'Developer',
      department: 'IT',
      email: 'john.doe@example.com',
      phone: '123-456-7890' },

    { id: 2,
      name: 'Jane Smith',
      position: 'Designer',
      department: 'Marketing',
      email: 'jane.smith@example.com',
      phone: '123-456-7890' },
  ];

  constructor(private router: Router) {}

  viewDetails(employeeId: number) {
    this.router.navigate(['/employee/', employeeId]);
  }

  addEmployee() {
    this.router.navigate(['/employee-form']);
  }
}
