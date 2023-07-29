import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { CityCardData } from '../dataTypes';

@Component({
  selector: 'app-favorite-cities',
  templateUrl: './favorite-cities.component.html',
  styleUrls: ['./favorite-cities.component.css'],
})
export class FavoriteCitiesComponent implements OnInit {
  constructor(private backendService: BackendService) {}

  public cities: CityCardData[] = [];
  ngOnInit(): void {
    this.backendService.getFavoriteCities().subscribe((val: any) => {
      this.cities = val;
    });
  }
}
