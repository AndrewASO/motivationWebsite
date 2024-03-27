import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GptService {
  private baseURL = `https://test--be-5b3b34eadcba.herokuapp.com`; // Adjust based on your server URL (Local Host : http://localhost:3000)

  constructor(private http: HttpClient) {}

  askGpt(query: string): Observable<any> {
    return this.http.post(`${this.baseURL}/ask-gpt`, { query });
  }
}
