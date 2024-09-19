import { Department } from './department.model';

describe('Department Interface', () => {
  it('should have the correct properties', () => {
    const department: Department = {
      id: 1,
      name: 'Engineering',
      employees: []
    };

    expect(department).toBeDefined();
    expect(department.id).toBe(1);
    expect(department.name).toBe('Engineering');
    expect(department.employees).toEqual([]);
  });
});
