import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  credentials = {
    username: '',
    password: '',
  };

  constructor(private router: Router, private authService: AuthService) {}

  login() {
    const validUsername = 'user';
    const validPassword = 'password';

    if (
      this.credentials.username === validUsername &&
      this.credentials.password === validPassword
    ) {
      this.authService.login();
      console.log('Login successful');
      this.router.navigate(['/profile']);
    } else {
      console.error('Invalid credentials');
      alert('Invalid username or password');
    }
  }
}
