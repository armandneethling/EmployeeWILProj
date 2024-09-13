import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees = [
    { id: 1, name: 'John Doe', position: 'Developer', department: 'IT', email: 'john.doe@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Jane Smith', position: 'Designer', department: 'Marketing', email: 'jane.smith@example.com', phone: '123-456-7890' },
  ];

  getEmployees(): Observable<any[]> {
    return of(this.employees);
  }

  getEmployee(id: number): Observable<any> {
    const employee = this.employees.find(emp => emp.id === id);
    return of(employee);
  }

  addEmployee(employee: any): void {
    employee.id = this.employees.length + 1;
    this.employees.push(employee);
  }

  updateEmployee(updatedEmployee: any): void {
    const index = this.employees.findIndex(emp => emp.id === updatedEmployee.id);
    if (index !== -1) {
      this.employees[index] = updatedEmployee;
    }
  }

  deleteEmployee(id: number): void {
    this.employees = this.employees.filter(emp => emp.id !== id);
  }
}
