import { Injectable } from '@angular/core';
import { CityCardData } from 'src/app/dataTypes';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CardFormDataServiceService {
  private selectedCityCard : CityCardData = {
    cityName : "",
    cityLabel : "",
    countryCode : ""
  }
  
  public selectedCitySubject = new BehaviorSubject<CityCardData>(this.selectedCityCard);



  constructor() { }

  setSelectedCard(cityData : CityCardData) {
   this.selectedCitySubject.next(cityData)
   this.selectedCityCard = cityData
  }

  getSelectedCard(): Observable<CityCardData> {
    return this.selectedCitySubject;
  }

  isCardSelected(cityData:CityCardData):boolean {
    if(this.selectedCityCard.cityName === cityData.cityName){
      return true;
    }
    return false;
  }


}
