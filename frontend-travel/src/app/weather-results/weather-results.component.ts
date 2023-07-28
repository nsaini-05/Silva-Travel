import { Component, OnInit } from '@angular/core';
import { WeatherapiService } from '../services/weatherapi/weatherapi.service';
import { SharedModule } from 'src/shared/shared.module';

@Component({
  selector: 'app-weather-results',
  templateUrl: './weather-results.component.html',
  styleUrls: ['./weather-results.component.css'],
  animations: [SharedModule.fadeInOut] 
})


export class WeatherResultsComponent implements OnInit{
  weatherData : any
  constructor(private weatherApi : WeatherapiService){
  }
  ngOnInit(): void {
    this.weatherApi.weatherApiServiceStatus.subscribe((val:any)=>{
     this.weatherData = val.data
    })
  }
}
