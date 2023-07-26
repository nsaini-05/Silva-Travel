import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FavoriteCitiesComponent } from './favorite-cities/favorite-cities.component';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FavoriteCitiesComponent
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
