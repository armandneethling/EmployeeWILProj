import { Employee } from './employee.model';

describe('Employee Interface', () => {
  it('should have the correct properties', () => {
    const employee: Employee = {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      position: 'Developer',
      departmentId: 1,
      department: undefined
    };

    expect(employee).toBeDefined();
    expect(employee.id).toBe(1);
    expect(employee.firstName).toBe('John');
    expect(employee.lastName).toBe('Doe');
    expect(employee.position).toBe('Developer');
    expect(employee.departmentId).toBe(1);
    expect(employee.department).toBeUndefined();
  });
});
