import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GptService {
  private baseURL = 'http://localhost:3000'; // Adjust based on your server URL

  constructor(private http: HttpClient) {}

  askGpt(query: string): Observable<any> {
    return this.http.post(`${this.baseURL}/ask-gpt`, { query });
  }
}
