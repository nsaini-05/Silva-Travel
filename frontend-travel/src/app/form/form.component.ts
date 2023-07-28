import { Component, OnInit } from '@angular/core';
import { CardFormDataServiceService } from 'src/app/services/shared/card-form-data-service.service';
import { CityCardData, WeatherFormData } from '../dataTypes';
import { WeatherapiService } from '../services/weatherapi/weatherapi.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  formData: WeatherFormData = {cityName : '' , forecastDate : ''};
  errorMessage: string = '';
  constructor(private cardFormService: CardFormDataServiceService,
    private weatherApi : WeatherapiService
    ) {}

  ngOnInit(): void {
    this.cardFormService
      .getSelectedCard()
      .subscribe(
        (val: CityCardData) => (this.formData.cityName = val.cityName)
      );
      this.weatherApi.weatherApiServiceStatus.subscribe((val:any) => this.errorMessage = val.error)
      
  }

  checkIfFormvalid(): boolean {
    if (this.formData.cityName !== '') {
      return true;
    }
    return false;
  }

  handleSubmit(){
    this.weatherApi.getWeatherData(this.formData)
  }



}
