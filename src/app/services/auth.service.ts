import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators'; // Add this import
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://localhost:7192/api/auth';
  private loggedInSubject = new BehaviorSubject<boolean>(false);
  public isLoggedIn$ = this.loggedInSubject.asObservable();

  constructor(private http: HttpClient) { }

  login(credentials: { email: string, password: string }): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/login`, credentials).pipe(
      tap(() => this.loggedInSubject.next(true)) // Set login status to true
    );
  }

  register(user: User): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/register`, user);
  }

  logout(): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/logout`, {}).pipe(
      tap(() => this.loggedInSubject.next(false)) // Set login status to false
    );
  }

  isLoggedIn(): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/isLoggedIn`);
  }
}
