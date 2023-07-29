import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BackendApiResponse } from '../dataTypes';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor(private http: HttpClient) {}
  apiUrl = 'http://127.0.0.1:3000/api/favorites/';
  backendApiServiceStatus = new EventEmitter<Object>();
  getFavoriteCities() {
    return this.http.get(this.apiUrl);
  }

  getCityDescriptionByName(cityName: string) {
    this.http.get(this.apiUrl + cityName).subscribe((val: any) => {
      if (val) {
        this.backendApiServiceStatus.emit({
          data: val,
          loading: false,
          error: '',
        });
      } else {
      }
    });
  }
}
