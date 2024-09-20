// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://localhost:5056/api/auth';

  constructor(private http: HttpClient) { }

  login(credentials: { email: string, password: string }): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/login`, credentials);
  }

  register(user: User): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/register`, user);
  }

  logout(): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/logout`, {});
  }

  isLoggedIn(): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/isLoggedIn`);
  }
}
