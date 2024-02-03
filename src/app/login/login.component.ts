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
    this.authService.login(this.username, this.password).subscribe(
      response => {
        if (response === true) {
          this.successMessage = 'Login successful';
          this.errorMessage = '';
          this.store.dispatch(login({ username: this.username, displayName: 'Your Display Name' })); // Adjust as needed
        } else {
          this.errorMessage = 'Invalid username or password.';
          this.successMessage = '';
        }
        // Clear form fields
        this.username = '';
        this.password = '';
      },
      error => {
        this.errorMessage = 'An error occurred during login. Please try again.';
        this.successMessage = '';
        // Clear form fields
        this.username = '';
        this.password = '';
      }
    );
  }

  onLogout() {
    this.store.dispatch(logout());
    this.successMessage = '';
  }
}
