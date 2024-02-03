import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3000'; // Adjust as necessary
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  // Expose the observable part of the isAuthenticated subject
  isAuthenticated$: Observable<boolean> = this.isAuthenticatedSubject.asObservable();

  constructor(private http: HttpClient) { }

  signIn(displayName: string, username: string, password: string): Observable<any> {
    const url = `${this.baseUrl}/SignIn`;
    const body = { displayName, username, password };
    return this.http.post(url, body).pipe(
      tap(response => {
        // You may want to check response to ensure login is successful before setting to true
        this.isAuthenticatedSubject.next(true);
      })
    );
  }

  login(username: string, password: string): Observable<any> {
    const url = `${this.baseUrl}/Login`;
    const body = { username, password };
    return this.http.post(url, body).pipe(
      tap(response => {
        // Again, check response to ensure login is successful
        this.isAuthenticatedSubject.next(true);
      })
    );
  }

  logout(): void {
    // Implement logout logic, then set isAuthenticated to false
    this.isAuthenticatedSubject.next(false);
  }
}
