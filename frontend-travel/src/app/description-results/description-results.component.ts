import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { SharedModule } from 'src/shared/shared.module';
import { BackendApiResponse } from '../dataTypes';

@Component({
  selector: 'app-description-results',
  templateUrl: './description-results.component.html',
  styleUrls: ['./description-results.component.css'],
  animations: [SharedModule.fadeInOut]
})
export class DescriptionResultsComponent implements OnInit{
  description:string = ""
  errorMessage:string = ""
  constructor(private backendApi : BackendService){
  }
  ngOnInit(): void {
    this.backendApi.backendApiServiceStatus.subscribe((val:BackendApiResponse)=> {
      if (!val.error && val.data) {
        this.errorMessage = ''
        this.description = val.data
      } else {
        this.description = ""
        this.errorMessage = val.error
      }
    })
  }
}
