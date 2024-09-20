import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private apiUrl = 'https://localhost:5056/api/reports';

  constructor(private http: HttpClient) {}

  getReports(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getReport(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addReport(report: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, report);
  }

  updateReport(report: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${report.id}`, report);
  }

  deleteReport(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
