// profile.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from '../services/profile.service';
import { Profile } from '../models/profile.model';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  profile: Profile = { id: 0, name: '', email: ''};

  constructor(private router: Router, private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileService.getProfile().subscribe(
      profile => {
        this.profile = profile;
      },
      error => {
        console.error('Error fetching profile:', error);
      }
    );
  }

  editProfile() {
    this.router.navigate(['/profile-edit']);
  }
}
