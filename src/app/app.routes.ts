import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { DepartmentsComponent } from './departments/departments.component';
import { DepartmentFormComponent } from './department-form/department-form.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { ReportsComponent } from './reports/reports.component';
import { ReportFormComponent } from './report-form/report-form.component';
import { ReportListComponent } from './report-list/report-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'employees', component: EmployeeListComponent},
  { path: 'employee/:id', component: EmployeeDetailComponent },
  { path: 'employee-form', component: EmployeeFormComponent},
  { path: 'employee-from/:id', component: EmployeeFormComponent},
  { path: 'departments', component: DepartmentsComponent},
  { path: 'department-form', component: DepartmentFormComponent},
  { path: 'department-list', component: DepartmentListComponent},
  { path: 'reports', component: ReportsComponent},
  { path: 'report-form', component: ReportFormComponent},
  { path: 'report-list', component: ReportListComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'profile-edit', component: ProfileEditComponent},
  { path: '**', redirectTo: 'home'},
];
