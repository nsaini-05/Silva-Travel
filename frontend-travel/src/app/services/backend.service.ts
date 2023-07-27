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
        label: 'CL',
      },
      {
        cityName: 'Edmonton',
        label: 'ED',
      },
      {
        cityName: 'Calgary',
        label: 'CL',
      },
      {
        cityName: 'Edmonton',
        label: 'ED',
      },
      {
        cityName: 'Delhi',
        label: 'DL',
      },

    ];
  }
}
