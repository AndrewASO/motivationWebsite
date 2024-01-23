

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private baseUrl: string = 'https://api.openweathermap.org/data/2.5/weather';
  private apiKey: string = 'c8b596441daceaa4a02caf8b708718c6'; // Use your API key

  constructor(private http: HttpClient) { }

  getWeatherForCity(city: string, unit: string): Observable<any> {
    const url = `${this.baseUrl}?q=${city}&appid=${this.apiKey}&units=${unit}`;
    return this.http.get(url);
  }
  
}
