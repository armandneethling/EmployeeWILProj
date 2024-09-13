import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent {
  profile = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    position: 'Software Engineer'
  };

  constructor(private router: Router) {}

  editProfile() {
    this.router.navigate(['/profile-edit']);
  }
}
