import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent {
  @Input ()  cityData:any = {}

  onCitySelect(cityData:any){
    console.log(cityData)
  }
}
