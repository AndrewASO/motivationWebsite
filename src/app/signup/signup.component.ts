import { Component } from '@angular/core';
import { AuthService } from '../services/auth.services';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  displayName: string = '';
  username: string = '';
  password: string = '';
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService ) { }

  onSignup() {
    this.authService.signIn(this.displayName, this.username, this.password).subscribe(
      response => {
        if (response === true) {
          this.successMessage = 'Signup successful';
          this.errorMessage = '';
        } else {
          this.errorMessage = 'Signup failed. Please try a different username.';
          this.successMessage = '';
        }
        // Clear form fields
        this.displayName = '';
        this.username = '';
        this.password = '';
      },
      error => {
        this.errorMessage = 'An error occurred during signup. Please try again.';
        this.successMessage = '';
        // Clear form fields
        this.displayName = '';
        this.username = '';
        this.password = '';
      }
    );
  }
}
