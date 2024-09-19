import { Department } from './department.model';

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  position: string;
  departmentId: number;
  department?: Department;
}
