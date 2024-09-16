import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../models/user.model';
import { Credentials } from '../models/credentials.model';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  private currentUser = new BehaviorSubject<User | null>(null);

  constructor() {
    const savedStatus = localStorage.getItem('loggedIn');
    if (savedStatus) {
      this.loggedIn.next(JSON.parse(savedStatus));
    }
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      this.currentUser.next(JSON.parse(savedUser));
    }
  }

  login(credentials: Credentials): Observable<boolean> {
    const user: User = { name: credentials.name, email: credentials.email };
    this.loggedIn.next(true);
    this.currentUser.next(user);
    localStorage.setItem('loggedIn', 'true');
    localStorage.setItem('currentUser', JSON.stringify(user));
    return of(true);
  }

  logout(): void {
    this.loggedIn.next(false);
    this.currentUser.next(null);
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('currentUser');
  }

  isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  getCurrentUser(): Observable<User | null> {
    return this.currentUser.asObservable();
  }

  updateUserProfile(updatedUser: User): void {
    this.currentUser.next(updatedUser);
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));
  }

  register(credentials: Credentials): Observable<boolean> {
    console.log('User registered:', credentials);
    return of(true);
  }
}
