import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weatherService';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css']
})
export class WeatherWidgetComponent implements OnInit {
  weather: any;
  unit: 'metric' | 'imperial' = 'metric'; // 'metric' for Celsius, 'imperial' for Fahrenheit

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.getWeatherData('Sarasota', this.unit);
  }

  getWeatherData(city: string, unit: string) {
    this.weatherService.getWeatherForCity(city, unit).subscribe(
      data => {
        this.weather = data;
      },
      error => {
        console.error('Error fetching weather', error);
      }
    );
  }

  toggleUnit() {
    this.unit = this.unit === 'metric' ? 'imperial' : 'metric';
    this.getWeatherData('Sarasota', this.unit); // Refetch the data with the new unit
  }
}
