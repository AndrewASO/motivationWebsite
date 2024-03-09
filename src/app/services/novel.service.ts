import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NovelService {
  private baseURL = 'http://localhost:3000'; // Adjust based on your server URL

  constructor(private http: HttpClient) {}

  getChapters(link: string): Observable<any> {
    return this.http.get(`${this.baseURL}/novel/chapters`, { params: { Link: link } });
  }
}
