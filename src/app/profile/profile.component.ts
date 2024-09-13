import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ CommonModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe(u => this.user = u);
  }

  updateProfile(updatedUser: User): void {
    if (updatedUser) {
      this.authService.updateUserProfile(updatedUser);
    }
  }
}
