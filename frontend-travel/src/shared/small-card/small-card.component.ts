import { Component, Input, OnInit } from '@angular/core';
import { CityCardData } from 'src/app/dataTypes';
import { CardFormDataServiceService } from 'src/app/services/shared/card-form-data-service.service';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css'],
})
export class SmallCardComponent implements OnInit {
  constructor(private cardFormService: CardFormDataServiceService) {}

  public isCardSelected : boolean = false;

  ngOnInit(): void {
  }

  @Input() cityData: any = {};

  onCitySelect(cityData: CityCardData) {
    this.cardFormService.setSelectedCard(cityData);
  }

  checkIfCardSelected(){
    return this.cardFormService.isCardSelected(this.cityData)
  }
}
