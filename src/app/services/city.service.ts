import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { City } from '../models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  cityUrl = "https://ranjanritesh22.github.io/book-my-show-cities-json/cities.json";

  constructor(private http : HttpClient) { }

  getCities() : Observable<City[]> {
    return this.http.get<City[]>(this.cityUrl)
  }
}