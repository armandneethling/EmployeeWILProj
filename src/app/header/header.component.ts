import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from "../app.component";
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, RouterOutlet, AppComponent, MatIconModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  isLoggedIn$!: Observable<boolean>;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn();
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
