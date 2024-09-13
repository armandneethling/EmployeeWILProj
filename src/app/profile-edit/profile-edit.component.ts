import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
  profile = {
    name: '',
    email: '',
    position: ''
  };

  constructor(
    private router: Router,
    private profileService: ProfileService
  ) {}

  ngOnInit(): void {
    const currentProfile = this.profileService.getProfile();
    if (currentProfile) {
      this.profile = { ...currentProfile };
    }
  }

  saveProfile() {
    this.profileService.updateProfile(this.profile).subscribe(() => {
      this.router.navigate(['/profile']);
    });
  }
}
