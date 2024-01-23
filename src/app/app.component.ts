import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { login, logout } from './auth/auth.actions';
import { AuthState } from './auth/auth.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testWebsite';

  constructor( private store : Store<{ auth: AuthState }>) {}

  onLogin() {
    this.store.dispatch(login({ username: 'user123', displayName: 'User 123' }));
  }

  onLogout() {
    this.store.dispatch(logout());
  }



  toggleNightMode() {
    document.body.classList.toggle('night-mode');
  }
}
