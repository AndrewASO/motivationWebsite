import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NovelService {
  private baseURL = `https://test--be-5b3b34eadcba.herokuapp.com`; // Adjust based on your server URL (Local Host : http://localhost:3000)
  constructor(private http: HttpClient) {}

  getChapters(link: string): Observable<any> {
    return this.http.get(`${this.baseURL}/novel/chapters`, { params: { Link: link } });
  }
}
