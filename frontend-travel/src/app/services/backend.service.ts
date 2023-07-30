import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BackendApiResponse } from '../dataTypes';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor(private http: HttpClient) {}
  apiUrl =  environment.apiUrl;
  private errorMessage = "Something went wrong while getting description"

  backendApiServiceStatus = new EventEmitter<Object>();
  getFavoriteCities() {
    return this.http.get(this.apiUrl);
  }

  getCityDescriptionByName(cityName: string) {
    this.backendApiServiceStatus.emit({ data: '', loading: true, error: '' });
    this.http.get<string>(`${this.apiUrl}description?cityname=${cityName}`).subscribe((val: string) => {
      if (val) {
        this.backendApiServiceStatus.emit({
          data: val,
          loading: false,
          error: '',
        });
      } 
  },
  (error) =>
  this.backendApiServiceStatus.emit({
    data: '',
    loading: false,
    error: this.errorMessage,
  })
  )}

}
