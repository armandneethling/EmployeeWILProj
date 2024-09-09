import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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

  viewDetails(employeeId: number) {
    // Your logic to view details
  }
}
