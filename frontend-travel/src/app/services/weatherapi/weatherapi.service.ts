import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CityCardData, WeatherFormData } from 'src/app/dataTypes';

@Injectable({
  providedIn: 'root',
})
export class WeatherapiService {
  constructor(private http: HttpClient) {}

  private apiKey = '45b8bb7fd80cc75d65e6d56ed991d131';
  private cordsUrl = 'http://api.openweathermap.org/geo/1.0/direct';
  private weatherApiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  getWeatherData(formData:WeatherFormData){
    const url = `${this.cordsUrl}?q=${formData.cityName}&limit=1&appid=${this.apiKey}`
    this.http.get(url).subscribe((val:any)=>console.log(val))
  }


 
}
