import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.model';

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

  login(user: User): void {
    this.loggedIn.next(true);
    this.currentUser.next(user);
    localStorage.setItem('loggedIn', 'true');
    localStorage.setItem('currentUser', JSON.stringify(user));
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
}
