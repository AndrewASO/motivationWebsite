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

  // Add a mapping between weather conditions and icons
  private weatherIcons: { [key: string]: string } = {
    'clear sky': '☀️', // Unicode for the sun
    'few clouds': '🌤️',
    'scattered clouds': '⛅',
    'overcast clouds': '⛅',
    'broken clouds': '☁️',
    'shower rain': '🌧️',
    'rain': '🌦️',
    'thunderstorm': '⛈️',
    'snow': '❄️',
    'mist': '🌫️'
    // Add more mappings as needed
  };
  

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

  // Add a method to get the icon for a given weather condition
  getWeatherIcon(condition: string): string {
    return this.weatherIcons[condition] || '🌈'; // Default icon if no match found
  }

  toggleUnit() {
    this.unit = this.unit === 'metric' ? 'imperial' : 'metric';
    this.getWeatherData('Sarasota', this.unit); // Refetch the data with the new unit
  }
}
