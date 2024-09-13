import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  user = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  constructor(private router: Router, private authService: AuthService) {}

  register() {
    // Registration logic here
    if (this.user.password === this.user.confirmPassword) {
      console.log('Registration successful');
      this.authService.login(); // Assuming user logs in upon registration
      this.router.navigate(['/profile']);
    } else {
      alert('Passwords do not match');
    }
  }
}
