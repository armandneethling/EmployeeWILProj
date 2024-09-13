import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

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

  selectedEmployee: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.selectedEmployee = this.employees.find(emp => emp.id === id);
  }

  editEmployee(employeeId: number) {
    // Your logic to edit employee
  }

  deleteEmployee(employeeId: number) {
    // Your logic to delete employee
  }
}
