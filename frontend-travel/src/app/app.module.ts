import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgIconsModule } from '@ng-icons/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FavoriteCitiesComponent } from './favorite-cities/favorite-cities.component';
import { SharedModule } from 'src/shared/shared.module';
import { FormComponent } from './form/form.component';
import { WeatherResultsComponent } from './weather-results/weather-results.component';
import { DescriptionResultsComponent } from './description-results/description-results.component';
import { FormsModule } from '@angular/forms';
import { ionAirplaneOutline } from '@ng-icons/ionicons';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FavoriteCitiesComponent,
    FormComponent,
    WeatherResultsComponent,
    DescriptionResultsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    NgIconsModule.withIcons({ ionAirplaneOutline }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
