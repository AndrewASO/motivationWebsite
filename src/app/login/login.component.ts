import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AuthService } from '../services/auth.services';
import { login, logout } from '../auth/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private store: Store) { }

  onLogin() {
    this.authService.login(this.username, this.password).subscribe(
      response => {
        console.log('Login successful', response);
        // Assuming response contains the username and display name
        this.store.dispatch(login({ username: response.username, displayName: response.displayName }));
        // Handle additional login success actions (like navigation)
      },
      error => {
        console.error('Login failed', error);
        // Handle login error
      }
    );
  }

  onLogout() {
    // Call service method if necessary for backend logout
    this.store.dispatch(logout());
    // Handle additional logout actions like redirecting to login page
  }
}
