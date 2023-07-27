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
      },
      {
        cityName: 'Edmonton',
        cityLabel: 'ED',
      },
      {
        cityName: 'Montreal',
        cityLabel: 'MTL',
      },
      {
        cityName: 'Toronto',
        cityLabel: 'YYZ',
      },
      {
        cityName: 'Vancouver',
        cityLabel: 'VC',
      },

    ];
  }
}
