import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent,
  HomeComponent,
  MoviesDetailComponent,
  RecommendedMoviesComponent,
  EventsComponent, 
  PremiereMoviesComponent,
  CarouselComponent, 
  SideNavComponent,
  CitiesComponent,
  LoginComponent,
  FooterComponent,
  AllMoviesComponent } from './components';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MoviesDetailComponent,
    RecommendedMoviesComponent,
    EventsComponent,
    PremiereMoviesComponent,
    CarouselComponent,
    SideNavComponent,
    CitiesComponent,
    LoginComponent,
    FooterComponent,
    AllMoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
