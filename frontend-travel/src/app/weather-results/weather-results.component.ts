import { Component, OnInit } from '@angular/core';
import { WeatherapiService } from '../services/weatherapi/weatherapi.service';
import { WeatherApiResponse, WeatherData } from '../dataTypes';
import { SharedModule } from 'src/shared/shared.module';

@Component({
  selector: 'app-weather-results',
  templateUrl: './weather-results.component.html',
  styleUrls: ['./weather-results.component.css'],
  animations: [SharedModule.fadeInOut],
})
export class WeatherResultsComponent implements OnInit {
  errorMessage: string = '';
  weatherData: WeatherData = {
    icon: '',
    name: '',
    temprature: '',
    date: '',
    windspeed: '',
    feelsLike: '',
    humidity: '',
  };
  constructor(private weatherApi: WeatherapiService) {}
  ngOnInit(): void {
    this.weatherApi.weatherApiServiceStatus.subscribe((val: any) => {
      this.clearValues();
      if (!val.error && val.data) {
        (val.data?.list?.length > 0) ? this.filterFromForeCastData(val) : this.fillValues(val.data)
      } else {
        this.errorMessage = val.error;
      }
    });
  }

  fillValues(data: any) {
    this.weatherData.name = data.name;
    this.weatherData.temprature = data.main.temp;
    this.weatherData.icon = data.weather[0].icon;
    this.weatherData.windspeed = data.wind.speed;
    this.weatherData.feelsLike = data.main.feels_like;
    this.weatherData.humidity = data.main.humidity;
    this.weatherData.date = data.date ? data.date : "Current Weather"
  }
  clearValues() {
    this.weatherData = {
      icon: '',
      name: '',
      temprature: '',
      date: '',
      windspeed: '',
      feelsLike: '',
      humidity: '',
    };
  }
  filterFromForeCastData(response:WeatherApiResponse){
    const {date,data} = response
    const filteredValue = data?.list.find((weatherResult:any) => 
      weatherResult.dt_txt.split(" ")[0] === date
    )
    filteredValue.name = data.city.name
    filteredValue.date = date
    this.fillValues(filteredValue)
  }
}
