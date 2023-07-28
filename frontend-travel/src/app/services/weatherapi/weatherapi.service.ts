import { Injectable, EventEmitter } from '@angular/core';
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

  weatherApiServiceStatus = new EventEmitter <Object>()


  getWeatherData(formData:WeatherFormData){
        this.getCordinates(formData)
  }

  getCordinates(formData:WeatherFormData){
    this.weatherApiServiceStatus.emit({data : '' , loading: true , error : ''})
    const url = `${this.cordsUrl}?q=${formData.cityName}&limit=1&appid=${this.apiKey}`
    this.http.get(url).subscribe((response:any)=>{
      if(response.length > 0){
        this.getWeather(response[0].lat , response[0].lon)
      }else{
        this.weatherApiServiceStatus.emit({data : '' , loading: false , error : 'Oops Something went wrong'})
      }
    },
    (error) =>this.weatherApiServiceStatus.emit({data : '' , loading: false , error : 'Oops Something went wrong'})
    )
  }

  getWeather(lat : string , lon : string) {
    const url = `${this.weatherApiUrl}?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric`
     this.http.get(url).subscribe((response:any)=>{
      this.weatherApiServiceStatus.emit({data : response , loading: false , error : ''})
    },
    (error) =>this.weatherApiServiceStatus.emit({data : '' , loading: false , error : 'Oops Something went wrong'})
    )
  }
}
