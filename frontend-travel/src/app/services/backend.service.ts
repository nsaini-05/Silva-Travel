import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor() {}

  getFavoriteCities() {
    return [
      {
        cityName: 'Calgary',
        cityLabel: 'CL',
        countryCode: 'ca'
      },
      {
        cityName: 'Edmonton',
        cityLabel: 'ca',
        countryCode: 'ca'

      },
      {
        cityName: 'Montreal',
        cityLabel: 'ca',
        countryCode: 'ca'

      },
      {
        cityName: 'Toronto',
        cityLabel: 'ca',
        countryCode: 'ca'

      },
      {
        cityName: 'Vancouver',
        cityLabel: 'ca',
        countryCode: 'ca'
      },

    ];
  }
}
