import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private apiUrl = 'https://localhost:5056/api/departments';

  constructor(private http: HttpClient) {}

  getDepartments(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  getDepartment(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  addDepartment(department: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, department).pipe(
      catchError(this.handleError)
    );
  }

  updateDepartment(department: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${department.id}`, department).pipe(
      catchError(this.handleError)
    );
  }

  deleteDepartment(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(() => new Error('Something went wrong. Please try again later.'));
  }
}
