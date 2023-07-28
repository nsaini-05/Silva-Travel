import { Injectable } from '@angular/core';
import { CityCardData } from '../dataTypes';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor() {}
  favoriteCities = [
      {
        cityName: 'Edmonton',
        cityLabel: 'ca',
        countryCode: 'ca',
        description : "Edmonton is the capital city of the Canadian province of Alberta. Edmonton is situated on the North Saskatchewan River and is the centre of the Edmonton Metropolitan"

      },
      {
        cityName: 'London',
        cityLabel: 'LHR',
        countryCode: 'gb',
        description : "London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. "

      },
      {
        cityName: 'Delhi',
        cityLabel: 'DEL',
        countryCode: 'in',
        description : "Delhi, India’s capital territory, is a massive metropolitan area in the country’s north. In Old Delhi, a neighborhood dating to the 1600s, stands the imposing Mughal-era Red"
      },
      {
        cityName: 'Beijing',
        cityLabel: 'PEK',
        countryCode: 'cn',
        description : "Beijing, China’s sprawling capital, has history stretching back 3 millennia. Yet it’s known as much for modern architecture as its ancient sites"

      },
      {
        cityName: 'Auckland',
        cityLabel: 'AKL',
        countryCode: 'nz',
        description : "Auckland, based around 2 large harbours, is a major city in the north of New Zealand’s North Island. In the centre, the iconic Sky Tower "
      },

    ];
  getFavoriteCities() {
    return  this.favoriteCities
  }
}
