import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { SharedModule } from 'src/shared/shared.module';

@Component({
  selector: 'app-description-results',
  templateUrl: './description-results.component.html',
  styleUrls: ['./description-results.component.css'],
  animations: [SharedModule.fadeInOut]
})
export class DescriptionResultsComponent implements OnInit{
  description:string = ""
  constructor(private backendApi : BackendService){
  }
  ngOnInit(): void {
    console.log("neeraj")
    this.backendApi.backendApiServiceStatus.subscribe((val:any)=> {
      console.log(val)
      this.description =val.data
    })
  }
}
