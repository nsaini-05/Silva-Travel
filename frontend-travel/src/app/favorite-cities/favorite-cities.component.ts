import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-favorite-cities',
  templateUrl: './favorite-cities.component.html',
  styleUrls: ['./favorite-cities.component.css']
})
export class FavoriteCitiesComponent implements OnInit{
  constructor(private backendService:BackendService){
    
  }

  public cities: any = []
  ngOnInit(): void {
    this.cities = this.backendService.getFavoriteCities()
  }
}
