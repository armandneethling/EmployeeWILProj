import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  credentials = {
    username: '',
    password: ''
  };

  @Output() loginSuccess = new EventEmitter<void>()

  login() {

    if (this.authService.login(this.credentials.username, this.credentials.password)) {
      console.log('Login successful');
      this.loginSuccess.emit();
      this.router.navigate(['/dashboard']);
    } else {
      console.error('Invalid credentials')
      alert('Invalid username or password')
    }
  }
}
