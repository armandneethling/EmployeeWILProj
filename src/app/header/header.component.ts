import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AppComponent } from "../app.component";
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, RouterOutlet, AppComponent, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(public AuthService: AuthService) {}
}
