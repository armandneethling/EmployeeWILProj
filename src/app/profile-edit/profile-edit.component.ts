import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-profile-edit',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
  profile: User = {
    name: '',
    email: '',
    position: '',
  };

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe((user) => {
      if (user) {
        this.profile = { ...user };
      }
    });
  }

  saveProfile() {
    this.authService.updateUserProfile(this.profile);
    this.router.navigate(['/profile']);
  }
}
