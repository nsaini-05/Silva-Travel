import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  CityCardData,
  CoordinatesResponse,
  WeatherApiResponse,
  WeatherFormData,
} from 'src/app/dataTypes';

@Injectable({
  providedIn: 'root',
})
export class WeatherapiService {
  constructor(private http: HttpClient) {}

  private apiKey = '45b8bb7fd80cc75d65e6d56ed991d131';
  private cordsUrl = 'http://api.openweathermap.org/geo/1.0/direct';
  private weatherApiUrl = 'https://api.openweathermap.org/data/2.5/';
  private errorMessage = 'Something went wrong while getting weather data';

  weatherApiServiceStatus = new EventEmitter<WeatherApiResponse>();

  getWeatherData(formData: WeatherFormData) {
    this.getCordinates(formData);
  }

  getCordinates(formData: WeatherFormData) {
    this.weatherApiServiceStatus.emit({ data: '', loading: true, error: '' });
    const url = `${this.cordsUrl}?q=${formData.cityName}&limit=1&appid=${this.apiKey}`;
    this.http.get<CoordinatesResponse[]>(url).subscribe(
      (response: CoordinatesResponse[]) => {
        if (response.length > 0) {
          formData.forecastDate !== ''
            ? this.getForecastWeather(
                response[0].lat,
                response[0].lon,
                formData
              )
            : this.getCurrentWeather(response[0].lat, response[0].lon);
        } else {
          this.weatherApiServiceStatus.emit({
            data: '',
            loading: false,
            error: this.errorMessage,
          });
        }
      },
      (error) =>
        this.weatherApiServiceStatus.emit({
          data: '',
          loading: false,
          error: this.errorMessage,
        })
    );
  }

  getCurrentWeather(lat: string, lon: string) {
    const url = `${this.weatherApiUrl}weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric`;
    this.http.get(url).subscribe(
      (response: any) => {
        this.weatherApiServiceStatus.emit({
          data: response,
          loading: false,
          error: '',
        });
      },
      (error) =>
        this.weatherApiServiceStatus.emit({
          data: '',
          loading: false,
          error: this.errorMessage,
        })
    );
  }

  getForecastWeather(lat: string, lon: string, formData: WeatherFormData) {
    const url = `${this.weatherApiUrl}forecast?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric`;
    this.http.get(url).subscribe(
      (response: any) => {
        this.weatherApiServiceStatus.emit({
          data: response,
          loading: false,
          error: '',
          date: formData.forecastDate,
        });
      },
      (error) =>
        this.weatherApiServiceStatus.emit({
          data: '',
          loading: false,
          error: this.errorMessage,
        })
    );
  }
}
