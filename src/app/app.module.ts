import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent ,
  HomeComponent,
  MoviesDetailComponent,
  RecommendedMoviesComponent,
  EventsComponent, 
  PremiereMoviesComponent,
  CarouselComponent } from './components';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MoviesDetailComponent,
    RecommendedMoviesComponent,
    EventsComponent,
    PremiereMoviesComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
