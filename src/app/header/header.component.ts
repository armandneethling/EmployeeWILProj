import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AppComponent } from "../app.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, RouterOutlet, AppComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
