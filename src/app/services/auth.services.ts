import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = `https://test--be-5b3b34eadcba.herokuapp.com` || 'http://localhost:3000'; // Adjust as necessary
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  private sessionTokenKey = 'sessionToken'; // Key for storing session token

  // Expose the observable part of the isAuthenticated subject
  isAuthenticated$: Observable<boolean> = this.isAuthenticatedSubject.asObservable();

  constructor(private http: HttpClient) {
    // Check for an existing session token at startup
    const sessionToken = localStorage.getItem(this.sessionTokenKey);
    this.isAuthenticatedSubject.next(!!sessionToken);
  }

  signIn(displayName: string, username: string, password: string): Observable<any> {
    const url = `${this.baseUrl}/SignIn`;
    const body = { displayName, username, password };
    return this.http.post<{sessionId: string}>(url, body).pipe(
      tap(response => {
        if (response.sessionId) {
          // If the signup process also logs the user in, handle the session ID
          localStorage.setItem(this.sessionTokenKey, response.sessionId);
          this.isAuthenticatedSubject.next(true);
        }
      })
    );
  }

  login(username: string, password: string): Observable<any> {
    const url = `${this.baseUrl}/Login`;
    const body = { username, password };
    return this.http.post<{sessionId: string}>(url, body).pipe(
      tap(response => {
        if (response.sessionId) {
          localStorage.setItem(this.sessionTokenKey, response.sessionId);
          localStorage.setItem('username', username);
          this.isAuthenticatedSubject.next(true);
        } else {
          this.isAuthenticatedSubject.next(false);
        }
      })
    );
  }

  logout(): void {
    localStorage.removeItem(this.sessionTokenKey);
    this.isAuthenticatedSubject.next(false);
  }
}
