import { Component } from '@angular/core';
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
    name: '',
    password: '',
  };

  constructor(private router: Router, private authService: AuthService) {}

  login() {
    this.authService.login(this.credentials).subscribe(
      (success: boolean) => {
        if (success) {
          console.log('Login successful');
          this.router.navigate(['/profile']);
        } else {
          console.error('Invalid credentials');
          alert('Invalid name or password');
        }
      },
      error => {
        console.error('Error during login:', error);
        alert('An error occurred. Please try again.');
      }
    );
  }
}
