import { Component, OnInit } from '@angular/core';
import { CityService } from '../../services';
import { City } from '../../models';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
})
export class CitiesComponent implements OnInit {

  cities : City[] = [];

  constructor( private  cityService : CityService) { }

  ngOnInit(): void {
    this.cityService.getCities().subscribe((cities)=> this.cities = cities)
  }
}