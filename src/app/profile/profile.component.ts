import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user = {
    profilePicture: 'assets/default-profile.png',
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    position: 'Developer',
    department: 'IT'
  };

  editProfile() {
    // Logic to edit the user's profile
  }
}
