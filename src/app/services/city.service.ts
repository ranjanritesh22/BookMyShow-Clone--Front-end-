import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { City } from '../models';
import { Cities } from '../mock-cities';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  allCities : City[] = Cities

  constructor() { }

  getCities() : Observable<City[]> {
    const cities = this.allCities;
    return of(cities);
  }
}