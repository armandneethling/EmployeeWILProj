import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  user = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  constructor(private router: Router, private authService: AuthService) {}

  register() {
    if (this.user.password === this.user.confirmPassword) {
      this.authService.register({ name: this.user.name, password: this.user.password }).subscribe(() => {
        console.log('Registration successful');
        this.authService.login({ name: this.user.name, password: this.user.password }).subscribe(() => {
          this.router.navigate(['/profile']);
        });
      });
    } else {
      alert('Passwords do not match');
    }
  }
}
