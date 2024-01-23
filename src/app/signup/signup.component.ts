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

  constructor(private authService: AuthService ) { }

  onSignup() {
    this.authService.signIn(this.displayName, this.username, this.password).subscribe(
      response => {
        console.log('Signup successful', response);
        // Handle response
      },
      error => {
        console.error('Signup failed', error);
        // Handle error
      }
    );
  }
}
