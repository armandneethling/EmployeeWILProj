import { User } from './user.model';

export interface Report {
  id: number;
  title: string;
  content: string;
  createdById: number;
  createdBy?: User;
}
