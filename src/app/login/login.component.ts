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
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private store: Store) { }

  onLogin() {
    this.authService.login(this.username, this.password).subscribe({
      next: (response) => {
        console.log('Login response:', response); // Debugging line
        if (response.sessionId) {
          this.successMessage = 'Login successful';
          this.errorMessage = '';
          this.store.dispatch(login({ username: this.username, displayName: 'Your Display Name' }));
        } else {
          this.errorMessage = 'Invalid username or password.';
          this.successMessage = '';
        }
        this.username = '';
        this.password = '';
      },
      error: (error) => {
        console.log('Login error:', error); // Debugging line
        this.errorMessage = 'An error occurred during login. Please try again.';
        this.successMessage = '';
        this.username = '';
        this.password = '';
      }
    });
  }
  
  
  

  onLogout() {
    this.authService.logout();
    this.store.dispatch(logout());
    this.successMessage = '';
  }
}
