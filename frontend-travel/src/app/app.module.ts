import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FavoriteCitiesComponent } from './favorite-cities/favorite-cities.component';
import { SharedModule } from 'src/shared/shared.module';
import { FormComponent } from './form/form.component';
import { WeatherResultsComponent } from './weather-results/weather-results.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FavoriteCitiesComponent,
    FormComponent,
    WeatherResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
