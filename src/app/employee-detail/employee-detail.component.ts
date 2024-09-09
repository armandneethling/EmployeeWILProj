import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-detail.component.html',
  styleUrl: './employee-detail.component.css'
})

export class EmployeeDetailComponent {
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

  editEmployee(employeeId: number) {
    // Your logic to edit employee
  }

  deleteEmployee(employeeId: number) {
    // Your logic to delete employee
  }
}
