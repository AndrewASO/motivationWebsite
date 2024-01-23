import { Component } from '@angular/core';
import { AuthService } from '../services/auth.services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  showDropdown = false;
  isAuthenticated$: Observable<boolean>;

  constructor(private authService: AuthService) {
    this.isAuthenticated$ = this.authService.isAuthenticated$;
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  toggleNightMode() {
    document.body.classList.toggle('night-mode');
  }

  onLogout() {
    this.authService.logout();
  }
}
