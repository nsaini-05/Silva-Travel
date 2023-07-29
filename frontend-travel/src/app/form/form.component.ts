import { Component, OnInit } from '@angular/core';
import { CardFormDataServiceService } from 'src/app/services/shared/card-form-data-service.service';
import { CityCardData, WeatherFormData } from '../dataTypes';
import { WeatherapiService } from '../services/weatherapi/weatherapi.service';
import { BackendService } from '../services/backend.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  formData: WeatherFormData = { cityName: '', forecastDate: '' };
  errorMessage: string = '';
  constructor(
    private cardFormService: CardFormDataServiceService,
    private weatherApi: WeatherapiService,
    private backendApi : BackendService
  ) {}

  ngOnInit(): void {
    this.cardFormService
      .getSelectedCard()
      .subscribe(
        (val: CityCardData) => (this.formData.cityName = val.cityName)
      );
  }

  checkIfFormvalid(): boolean {
    if (this.formData.cityName !== '' && this.chekIfDateIsValid() ) {
      return true;
    }
    return false;
  }

  chekIfDateIsValid() {
    if (this.formData.forecastDate !== '') {
      const [year,month,day] = this.formData.forecastDate.split("-")
      const forecastDate = new Date(Number(year), Number(month)-1, Number(day));
      const currentDate = new Date()
      currentDate.setHours(0, 0, 0, 0);
      forecastDate.setHours(0, 0, 0, 0);
      const days = (Number(forecastDate) - Number(currentDate)) / (1000 * 24 * 3600) ;
      return (days < 6 && days >=1 ) ?  true : false
    }
    return true
  }

  selectDate(e:string){
    this.formData.forecastDate = e
    if(!this.chekIfDateIsValid()){
      this.errorMessage = "Please select a date within the next 5 days."
    }else{
      this.errorMessage = ''
    }
  }

  handleSubmit() {
    this.weatherApi.getWeatherData(this.formData);
    this.backendApi.getCityDescriptionByName(this.formData.cityName)
  }
}
