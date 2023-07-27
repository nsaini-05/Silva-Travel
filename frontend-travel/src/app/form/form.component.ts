import { Component, OnInit } from '@angular/core';
import { CardFormDataServiceService } from 'src/app/services/shared/card-form-data-service.service';
import { CityCardData } from '../dataTypes';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  formData: any = {};
  errorMessage: string = '';

  constructor(private cardFormService: CardFormDataServiceService) {}

  ngOnInit(): void {
    this.cardFormService
      .getSelectedCard()
      .subscribe(
        (val: CityCardData) => (this.formData.cityName = val.cityName)
      );
  }

  checkIfFormvalid(): boolean {
    if (this.formData.cityName !== '') {
      return true;
    }
    return false;
  }

  handleSubmit(formData : any){
    console.log(formData)
  }



}
